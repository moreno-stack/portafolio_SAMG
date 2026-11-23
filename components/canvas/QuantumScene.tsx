"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PointMaterial, Points } from "@react-three/drei";
import * as THREE from "three";

const PARTICLE_COUNT = 900;

function createEditorialParticlePositions(count: number): Float32Array {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const t = (i + 0.5) / count;
    const phi = Math.acos(1 - 2 * t);
    const goldenAngle = Math.PI * (1 + Math.sqrt(5)) * i;
    const radialNoise =
      2.3 + (((Math.sin(i * 12.9898) * 43758.5453) % 1) + 1) % 1 * 3.8;

    positions[i * 3] = radialNoise * Math.sin(phi) * Math.cos(goldenAngle);
    positions[i * 3 + 1] = radialNoise * Math.sin(phi) * Math.sin(goldenAngle);
    positions[i * 3 + 2] = radialNoise * Math.cos(phi);
  }
  return positions;
}

const HERO_PARTICLES = createEditorialParticlePositions(PARTICLE_COUNT);
const COMPACT_PARTICLES = createEditorialParticlePositions(420);

type CoreProps = {
  variant: "hero" | "compact";
  accentColor: string;
};

function ArchitecturalPolyhedron({ variant, accentColor }: CoreProps) {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  const ringARef = useRef<THREE.Mesh>(null);

  const scale = variant === "hero" ? 0.95 : 0.88;

  useFrame((state, delta) => {
    const { pointer, clock } = state;
    const elapsed = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        pointer.y * 0.38,
        0.06
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.5,
        0.06
      );
    }

    if (innerRef.current) {
      innerRef.current.rotation.x += delta * 0.35;
      innerRef.current.rotation.y -= delta * 0.45;
      const pulse = 1 + Math.sin(elapsed * 1.8) * 0.035;
      innerRef.current.scale.setScalar(pulse);
    }

    if (outerRef.current) {
      outerRef.current.rotation.x -= delta * 0.18;
      outerRef.current.rotation.y += delta * 0.28;
    }

    if (ringARef.current) {
      ringARef.current.rotation.z += delta * 0.25;
      ringARef.current.rotation.x =
        Math.PI / 2.5 + Math.sin(elapsed * 0.7) * 0.14;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.55}>
      <group ref={groupRef} scale={scale}>
        {/* Núcleo interior: Icosaedro arquitectónico */}
        <mesh ref={innerRef}>
          <icosahedronGeometry args={[1.02, 1]} />
          <meshStandardMaterial
            color={accentColor}
            roughness={0.32}
            metalness={0.65}
            flatShading
          />
        </mesh>

        {/* Sub-capa wireframe en tinta carbón */}
        <mesh scale={1.1}>
          <icosahedronGeometry args={[1.02, 1]} />
          <meshBasicMaterial
            color="#18181B"
            wireframe
            transparent
            opacity={0.32}
          />
        </mesh>

        {/* Dodecaedro exterior en línea fina editorial */}
        <mesh ref={outerRef}>
          <dodecahedronGeometry args={[1.72, 0]} />
          <meshBasicMaterial
            color="#18181B"
            wireframe
            transparent
            opacity={0.48}
          />
        </mesh>

        {/* Anillo orbital terracota */}
        <mesh ref={ringARef}>
          <torusGeometry args={[2.18, 0.014, 16, 96]} />
          <meshBasicMaterial color={accentColor} transparent opacity={0.55} />
        </mesh>
      </group>
    </Float>
  );
}

function EditorialParticleField({ variant }: { variant: "hero" | "compact" }) {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = variant === "hero" ? HERO_PARTICLES : COMPACT_PARTICLES;

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const { pointer } = state;
    pointsRef.current.rotation.y += delta * 0.035;
    pointsRef.current.position.x = THREE.MathUtils.lerp(
      pointsRef.current.position.x,
      pointer.x * 0.28,
      0.04
    );
    pointsRef.current.position.y = THREE.MathUtils.lerp(
      pointsRef.current.position.y,
      pointer.y * 0.22,
      0.04
    );
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8E5B47"
        size={variant === "hero" ? 0.028 : 0.035}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  );
}

export type QuantumSceneProps = {
  variant?: "hero" | "compact";
  accentColor?: string;
  className?: string;
};

export default function QuantumScene({
  variant = "hero",
  accentColor = "#8E5B47",
  className = "h-full w-full",
}: QuantumSceneProps) {
  return (
    <div className={className} aria-hidden="true">
      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center">
            <div className="h-20 w-20 animate-pulse rounded-full border border-stone-300 bg-stone-100" />
          </div>
        }
      >
        <Canvas
          camera={{ position: [0, 0, variant === "hero" ? 5.8 : 5.3], fov: 45 }}
          dpr={[1, 1.75]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          <ambientLight intensity={1.1} />
          <directionalLight position={[4, 6, 4]} intensity={1.6} color="#FFFFFF" />
          <pointLight position={[-4, -3, 3]} intensity={1.2} color={accentColor} />

          <ArchitecturalPolyhedron variant={variant} accentColor={accentColor} />
          <EditorialParticleField variant={variant} />
        </Canvas>
      </Suspense>
    </div>
  );
}
