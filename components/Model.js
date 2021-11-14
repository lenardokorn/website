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

const Model = ({ modelPath }) => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState();
  const scene = new THREE.Scene();
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
      renderer.setSize(containerWidth, containerHeight);
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      const scale = containerHeight * 0.005 + 4.8;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      );
      camera.position.copy(initialCameraPosition);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;

      loadGLTFModel(scene, modelPath, {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req = null;
      const animate = () => {
        req = requestAnimationFrame(animate);
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
      className="w-96 h-96 flex items-center justify-center"
      ref={refContainer}
    >
      {loading && <Spinner />}
    </div>
  );
};

export default Model;
