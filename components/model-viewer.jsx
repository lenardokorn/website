import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useCallback, useEffect, useRef, useState } from 'react';
import Spinner from './spinner';

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
        obj.name = 'model';
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

const ModelViewer = ({ modelPath }) => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState();
  const [_camera, setCamera] = useState();
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  );
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState();

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer;

    if (container && renderer) {
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      renderer.setSize(containerWidth, containerHeight);

      const scaleX = containerWidth * 0.000025 + 4.8;
      const scaleY = containerHeight * 0.000025 + 4.8;
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
      setCamera(camera);
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

      const scaleX = containerWidth * 0.000025 + 4.8;
      const scaleY = containerHeight * 0.000025 + 4.8;
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
      setCamera(camera);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      setControls(controls);

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
      className="flex aspect-square w-full items-center justify-center"
      ref={refContainer}
    >
      {loading && <Spinner />}
    </div>
  );
};

export default ModelViewer;
