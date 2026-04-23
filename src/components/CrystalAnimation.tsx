import { useRef, useEffect } from "react";
import * as THREE from "three";

const CrystalAnimation = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 16;
    
    // Shift the camera left on desktop so the object moves to the right part of the screen
    if (width >= 1025) {
      camera.position.x = -4;
    }

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x9b59ff, 1.2, 100);
    pointLight.position.set(10, 10, 20);
    scene.add(pointLight);

    // Crystal geometry (multiple random tetrahedrons)
    const crystals = [];
    for (let i = 0; i < 18; i++) {
      const geometry = new THREE.TetrahedronGeometry(Math.random() * 2 + 1, 0);
      const material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(`hsl(${Math.random() * 360}, 80%, 80%)`),
        metalness: 0.7,
        roughness: 0.2,
        transmission: 0.7,
        thickness: 0.7,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        reflectivity: 0.7,
        ior: 1.4,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        Math.sin((i / 18) * Math.PI * 2) * 6 + (Math.random() - 0.5) * 1.5,
        Math.cos((i / 18) * Math.PI * 2) * 6 + (Math.random() - 0.5) * 1.5,
        (Math.random() - 0.5) * 3
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      scene.add(mesh);
      crystals.push(mesh);
    }

    // Central glowing ring
    const torusGeometry = new THREE.TorusGeometry(3.5, 0.7, 32, 100);
    const torusMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x9b59ff,
      metalness: 0.8,
      roughness: 0.1,
      transmission: 0.8,
      thickness: 1.2,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      reflectivity: 0.8,
      ior: 1.5,
      emissive: 0x9b59ff,
      emissiveIntensity: 0.5,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torus);

    // Animation loop
    let frameId;
    const animate = () => {
      torus.rotation.z += 0.01;
      torus.rotation.x += 0.003;
      crystals.forEach((c, i) => {
        c.rotation.x += 0.01 + i * 0.0005;
        c.rotation.y += 0.008 + i * 0.0003;
      });
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0, zIndex: 1 }}
    />
  );
};

export default CrystalAnimation;
