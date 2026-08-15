<script setup lang="ts">
/**
 * Scène 3D d'ambiance pour le hero — icosaèdre wireframe + particules,
 * en écho au "M-NETHUB Hub" (réseau/nœuds). Purement décoratif :
 * pointer-events désactivés, se met en pause si prefers-reduced-motion.
 */
import { onBeforeUnmount, onMounted, ref } from "vue";
import * as THREE from "three";

const containerRef = ref<HTMLDivElement | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);

let renderer: THREE.WebGLRenderer | null = null;
let scene: THREE.Scene | null = null;
let camera: THREE.PerspectiveCamera | null = null;
let group: THREE.Group | null = null;
let particles: THREE.Points | null = null;
let frameId = 0;
let resizeObserver: ResizeObserver | null = null;

let mouseX = 0;
let mouseY = 0;

const onMouseMove = (e: MouseEvent) => {
  mouseX = e.clientX / window.innerWidth - 0.5;
  mouseY = e.clientY / window.innerHeight - 0.5;
};

const resize = () => {
  if (!renderer || !camera || !containerRef.value) return;
  const { clientWidth: w, clientHeight: h } = containerRef.value;
  if (w === 0 || h === 0) return;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
};

onMounted(() => {
  if (!canvasRef.value || !containerRef.value) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.z = 6;

  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    alpha: true,
    antialias: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const accent = new THREE.Color("#29b6e8");

  group = new THREE.Group();
  scene.add(group);

  const outerMesh = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2, 1),
    new THREE.MeshPhongMaterial({ color: accent, wireframe: true, transparent: true, opacity: 0.35 })
  );
  group.add(outerMesh);

  const innerMesh = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.15, 0),
    new THREE.MeshPhongMaterial({ color: accent, emissive: accent, emissiveIntensity: 0.6, wireframe: true })
  );
  group.add(innerMesh);

  const particleCount = window.innerWidth < 768 ? 160 : 420;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < positions.length; i++) {
    positions[i] = (Math.random() - 0.5) * 9;
  }
  const particlesGeo = new THREE.BufferGeometry();
  particlesGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  particles = new THREE.Points(
    particlesGeo,
    new THREE.PointsMaterial({ size: 0.025, color: accent, transparent: true, opacity: 0.75 })
  );
  scene.add(particles);

  scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  const pointLight = new THREE.PointLight(accent, 2.2);
  pointLight.position.set(5, 5, 5);
  scene.add(pointLight);

  resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(containerRef.value);
  resize();

  window.addEventListener("mousemove", onMouseMove, { passive: true });

  const renderFrame = () => {
    if (!renderer || !scene || !camera || !group || !particles) return;
    group.rotation.y += 0.0035 + mouseX * 0.01;
    group.rotation.x += 0.002 + mouseY * 0.01;
    particles.rotation.y += 0.0009;
    renderer.render(scene, camera);
    if (!prefersReducedMotion) frameId = requestAnimationFrame(renderFrame);
  };

  renderFrame();
});

onBeforeUnmount(() => {
  cancelAnimationFrame(frameId);
  resizeObserver?.disconnect();
  window.removeEventListener("mousemove", onMouseMove);

  scene?.traverse((obj: THREE.Object3D) => {
    if (obj instanceof THREE.Mesh || obj instanceof THREE.Points) {
      obj.geometry.dispose();
      const mat = obj.material;
      if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
      else mat.dispose();
    }
  });
  renderer?.dispose();
});
</script>

<template>
  <div ref="containerRef" class="absolute inset-0 pointer-events-none" aria-hidden="true">
    <canvas ref="canvasRef" class="h-full w-full"></canvas>
  </div>
</template>
