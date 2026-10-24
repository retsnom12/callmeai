'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import * as THREE from 'three';

function AudioCore() {
  const shell = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const pulse = 1 + Math.sin(elapsed * 2.2) * 0.045;
    const wave = Math.sin(elapsed * 1.7) * 0.025;

    if (shell.current) {
      shell.current.rotation.y = elapsed * 0.22;
      shell.current.rotation.z = Math.sin(elapsed * 0.7) * 0.04;
      shell.current.scale.setScalar(pulse);
    }
    if (core.current) {
      core.current.rotation.x = elapsed * 0.18;
      core.current.rotation.y = -elapsed * 0.25;
      core.current.scale.set(1 + wave, 1 - wave * 0.65, 1 + wave * 0.8);
    }
  });

  return (
    <group>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.58, 3]} />
        <meshStandardMaterial
          color="#050807"
          emissive="#1a2a0e"
          emissiveIntensity={0.8}
          metalness={0.82}
          roughness={0.24}
        />
      </mesh>
      <group ref={shell}>
        <mesh>
          <icosahedronGeometry args={[0.82, 2]} />
          <meshStandardMaterial
            color="#82E636"
            emissive="#6ECE2B"
            emissiveIntensity={1.8}
            wireframe
            transparent
            opacity={0.88}
            toneMapped={false}
          />
        </mesh>
        <mesh scale={1.08}>
          <icosahedronGeometry args={[0.82, 1]} />
          <meshBasicMaterial color="#92F547" wireframe transparent opacity={0.22} toneMapped={false} />
        </mesh>
      </group>
    </group>
  );
}

function AnimatedAudioCore() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.position.y = 0.28 + Math.sin(clock.getElapsedTime() * 0.72) * 0.16;
  });

  return (
    <group ref={group} position={[0, 0.28, 0.25]}>
      <AudioCore />
    </group>
  );
}

const cableCurves = [
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.15, 0),
    new THREE.Vector3(0.25, -0.4, -0.1),
    new THREE.Vector3(0.7, -0.7, 0.05),
  ]),
];

function Podium() {
  const dark = '#11151c';
  const green = '#82E636';

  return (
    <group position={[0, -1.45, 0]}>
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[1.45, 1.6, 0.35, 12]} />
        <meshStandardMaterial color={dark} metalness={0.82} roughness={0.28} />
      </mesh>
      <mesh position={[0, 0.36, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.12, 0.045, 8, 32]} />
        <meshBasicMaterial color={green} toneMapped={false} />
      </mesh>
      <mesh position={[0, 0.22, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.72, 0.035, 8, 24]} />
        <meshBasicMaterial color={green} toneMapped={false} />
      </mesh>
      {[-0.95, 0.95].map((x) => (
        <mesh key={x} position={[x, 0.48, 0]}>
          <cylinderGeometry args={[0.18, 0.22, 0.7, 10]} />
          <meshStandardMaterial color={dark} metalness={0.9} roughness={0.22} />
        </mesh>
      ))}
      {cableCurves.map((curve, index) => (
        <group key={index} position={[0, 1.3, 0]}>
          <mesh>
            <tubeGeometry args={[curve, 14, 0.025, 6, false]} />
            <meshStandardMaterial color={dark} metalness={0.75} roughness={0.3} />
          </mesh>
          <mesh position={[0.75, -1.25, 0]}>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshBasicMaterial color={green} toneMapped={false} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

const PARTICLE_COUNT = 1200;
const PARTICLE_MAX_RADIUS = 7;
const PARTICLE_DIRECTIONS = new Float32Array(PARTICLE_COUNT * 3);
const PARTICLE_PHASES = new Float32Array(PARTICLE_COUNT);
const PARTICLE_SPEEDS = new Float32Array(PARTICLE_COUNT);

for (let index = 0; index < PARTICLE_COUNT; index += 1) {
  const offset = index * 3;
  const seed = index * 12.9898;
  const angle = index * 2.399963;
  const depth = ((Math.sin(seed * 2.11) + 1) / 2 - 0.5) * 0.45;
  PARTICLE_DIRECTIONS[offset] = Math.cos(angle);
  PARTICLE_DIRECTIONS[offset + 1] = Math.sin(angle);
  PARTICLE_DIRECTIONS[offset + 2] = depth;
  PARTICLE_PHASES[index] = (Math.sin(seed * 1.37) + 1) / 2;
  PARTICLE_SPEEDS[index] = 0.035 + ((Math.sin(seed * 1.91) + 1) / 2) * 0.025;
}

function InteractiveParticles() {
  const points = useRef<THREE.Points>(null);
  const geometry = useRef<THREE.BufferGeometry>(null);
  const [particlePositions] = useState(() => new Float32Array(PARTICLE_COUNT * 3));
  const positions = useRef(particlePositions);
  const cursor = useRef(new THREE.Vector3());
  const cursorTarget = useRef(new THREE.Vector3());
  const rayDirection = useRef(new THREE.Vector3());
  const pointerInput = useRef(new THREE.Vector2());
  const pointerActive = useRef(false);
  const scrolling = useRef(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const updatePointer = (event: PointerEvent) => {
      pointerInput.current.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1,
      );
      pointerActive.current = true;
    };
    const clearPointer = () => {
      pointerActive.current = false;
    };
    const markScrolling = () => {
      scrolling.current = true;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        scrolling.current = false;
      }, 120);
    };

    window.addEventListener('pointermove', updatePointer, { passive: true });
    window.addEventListener('pointerleave', clearPointer);
    window.addEventListener('scroll', markScrolling, { passive: true });
    return () => {
      window.removeEventListener('pointermove', updatePointer);
      window.removeEventListener('pointerleave', clearPointer);
      window.removeEventListener('scroll', markScrolling);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  useFrame(({ camera, pointer, clock }) => {
    if (scrolling.current) return;

    const normalizedPointer = pointerActive.current ? pointerInput.current : pointer;
    cursorTarget.current.set(normalizedPointer.x, normalizedPointer.y, 0).unproject(camera);
    rayDirection.current.copy(cursorTarget.current).sub(camera.position).normalize();
    const projectionDistance = -camera.position.z / rayDirection.current.z;
    cursorTarget.current.copy(camera.position).add(rayDirection.current.multiplyScalar(projectionDistance));
    cursor.current.lerp(cursorTarget.current, 0.08);

    const elapsed = clock.getElapsedTime();
    const nextPositions = positions.current;
    const cursorLocalX = cursor.current.x;
    const cursorLocalY = cursor.current.y - 0.28;
    for (let index = 0; index < PARTICLE_COUNT; index += 1) {
      const offset = index * 3;
      const radius = 0.2 + ((PARTICLE_PHASES[index] + elapsed * PARTICLE_SPEEDS[index]) % 1) * PARTICLE_MAX_RADIUS;
      const originX = PARTICLE_DIRECTIONS[offset] * radius;
      const originY = PARTICLE_DIRECTIONS[offset + 1] * radius;
      const originZ = PARTICLE_DIRECTIONS[offset + 2] * radius * 0.45;
      const currentX = nextPositions[offset];
      const currentY = nextPositions[offset + 1];
      const currentZ = nextPositions[offset + 2];
      const distance = Math.hypot(cursorLocalX - originX, cursorLocalY - originY);
      const attraction = pointerActive.current ? Math.max(0, 1 - distance / 2.25) ** 2 * 0.86 : 0;

      nextPositions[offset] = currentX + (originX + (cursorLocalX - originX) * attraction - currentX) * 0.08;
      nextPositions[offset + 1] = currentY + (originY + (cursorLocalY - originY) * attraction - currentY) * 0.08;
      nextPositions[offset + 2] = currentZ + (originZ - currentZ) * 0.042;
    }

    if (geometry.current) {
      const attribute = geometry.current.getAttribute('position');
      attribute.needsUpdate = true;
    }
    if (points.current) points.current.rotation.y = Math.sin(elapsed * 0.08) * 0.03;
  });

  return (
    <points ref={points} position={[0, 0, -0.4]}>
      <bufferGeometry ref={geometry}>
        <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#82E636"
        size={0.045}
        sizeAttenuation
        transparent
        opacity={0.84}
        depthWrite={false}
        toneMapped={false}
      />
    </points>
  );
}

function CameraParallax() {
  useFrame(({ camera, pointer }) => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.24, 0.025);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.14, 0.025);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export function CallCenterScene() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 [contain:paint_layout] [will-change:transform]"
      role="img"
      aria-label="Animated neon lime AI voice orb with outward-moving particles"
    >
      <Canvas
        camera={{ fov: 35, position: [0, 0, 7] }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        resize={{ scroll: false, debounce: { scroll: 0, resize: 100 } }}
        style={{ pointerEvents: 'none' }}
      >
        <CameraParallax />
        <ambientLight intensity={0.4} color="#94a3b8" />
        <directionalLight position={[3, 4, 5]} intensity={1.2} color="#e2e8f0" />
        <pointLight position={[0, -1.1, 1.5]} intensity={12} distance={5} color="#82E636" />
        <pointLight position={[-1.5, -0.8, 1]} intensity={6} distance={5} color="#6ECE2B" />
        <Podium />
        <InteractiveParticles />
        <Sparkles count={28} scale={[2.5, 2.1, 1.5]} position={[0, -0.7, 0]} size={2.2} speed={0.22} color="#92F547" />
        <AnimatedAudioCore />
        <EffectComposer multisampling={0}>
          <Bloom intensity={0.65} luminanceThreshold={0.55} luminanceSmoothing={0.3} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </div>
  );
}