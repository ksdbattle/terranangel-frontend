'use client';

import { PlanetType } from '@/types';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PlanetProps extends PlanetType {
  onClick: () => void;
}

export default function Planet({ name: _name, radius, distance, color, onClick }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const angle = clock.getElapsedTime() * 0.1;
      const x = Math.sin(angle) * distance;
      const z = Math.cos(angle) * distance;
      meshRef.current.position.set(x, 0, z);
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} onClick={onClick}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
