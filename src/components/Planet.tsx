'use client';

import { PlanetType } from '@/types';
import { useRef } from 'react';
import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PlanetProps extends PlanetType {
  onClick: () => void;
}

// Base speed for Earth's orbit (e.g., completes a circle in 60 seconds)
const EARTH_YEAR_IN_SECONDS = 60;

export default function Planet({ name, radius, distance, color, ring, orbitalPeriod, initialAngle = 0, onClick }: PlanetProps) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const orbitalSpeed = (2 * Math.PI) / (EARTH_YEAR_IN_SECONDS * orbitalPeriod);
      // Start from the initial angle fetched from the API
      const angle = initialAngle + clock.getElapsedTime() * orbitalSpeed;
      const x = Math.sin(angle) * distance;
      const z = Math.cos(angle) * distance;
      groupRef.current.position.set(x, 0, z);

      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh onClick={onClick}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
      </mesh>
      <Text
        position={[0, radius + 1.5, 0]} // Adjust position based on radius
        fontSize={Math.max(0.8, radius * 0.5)} // Dynamic font size
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
      {ring && (
        <mesh rotation-x={Math.PI / 2}>
          <ringGeometry args={[ring.innerRadius, ring.outerRadius, 64]} />
          <meshStandardMaterial color={ring.color} side={THREE.DoubleSide} />
        </mesh>
      )}
    </group>
  );
}
