'use client';

import { PlanetType } from '@/types';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PlanetProps extends PlanetType {
  onClick: () => void;
}

export default function Planet({ name: _name, radius, distance, color, ring, onClick }: PlanetProps) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Slower orbital speed for outer planets
      const orbitalSpeed = 0.1 / (distance / 10);
      const angle = clock.getElapsedTime() * orbitalSpeed;
      const x = Math.sin(angle) * distance;
      const z = Math.cos(angle) * distance;
      groupRef.current.position.set(x, 0, z);

      // Planet's own rotation
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh onClick={onClick}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
      </mesh>
      {ring && (
        <mesh rotation-x={Math.PI / 2}>
          <ringGeometry args={[ring.innerRadius, ring.outerRadius, 64]} />
          <meshStandardMaterial color={ring.color} side={THREE.DoubleSide} />
        </mesh>
      )}
    </group>
  );
}
