import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useCallback, useEffect, useRef, useState } from 'react';
import Spinner from './Spinner';

const loadGLTFModel = (
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) => {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = 'dog';
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });
        resolve(obj);
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
};

const easeOutCirc = (x) => {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
};

const Model = ({ modelPath, w, h }) => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState();
  const scene = new THREE.Scene();
  const target = new THREE.Vector3(-0.5, 1.2, 0);
  const initialCameraPosition = new THREE.Vector3(
    20 * Math.sin(0.2 * Math.PI),
    10,
    20 * Math.cos(0.2 * Math.PI)
  );

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer;

    if (container && renderer) {
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      renderer.setSize(containerWidth, containerHeight);
    }
  }, [renderer]);

  useEffect(() => {
    const { current: container } = refContainer;

    if (container && !renderer) {
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(containerWidth, containerHeight);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      const scaleX = containerWidth * 0.01;
      const scaleY = containerHeight * 0.01;
      const camera = new THREE.OrthographicCamera(
        -scaleX,
        scaleX,
        scaleY,
        -scaleY,
        0.01,
        50000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;

      loadGLTFModel(scene, modelPath, {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const pos = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

          camera.position.x =
            pos.x * Math.cos(rotSpeed) + pos.z * Math.sin(rotSpeed);
          camera.position.y = 10;
          camera.position.z =
            pos.z * Math.cos(rotSpeed) - pos.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);
    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    };
  }, [renderer, handleWindowResize]);

  return (
    <div
      className="flex items-center justify-center"
      style={{
        width: `${w ? w : 400}px`,
        height: `${h ? h : 400}px`,
      }}
      ref={refContainer}
    >
      {loading && <Spinner />}
    </div>
  );
};

export default Model;
