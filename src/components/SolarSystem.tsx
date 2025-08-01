'use client';

import { PlanetType } from '@/types';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Planet from './Planet';
import InfoPanel from './InfoPanel';
import { planetData } from '@/planetData';

export default function SolarSystem() {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetType | null>(null);

  return (
    <>
      <Canvas camera={{ position: [0, 40, 80], fov: 45 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 0, 0]} intensity={2.5} color="#ffdcb4" />
        <mesh>
          <sphereGeometry args={[2.5, 32, 32]} />
          <meshStandardMaterial color="#ffdcb4" emissive="#ffdcb4" emissiveIntensity={0.8} />
        </mesh>
        <OrbitControls enablePan={false} minDistance={10} maxDistance={150} />
        {planetData.map((planet) => (
          <Planet key={planet.name} {...planet} onClick={() => setSelectedPlanet(planet)} />
        ))}
        <EffectComposer>
          <Bloom intensity={1.2} kernelSize={3} luminanceThreshold={0.1} luminanceSmoothing={0.9} />
        </EffectComposer>
      </Canvas>
      {selectedPlanet && <InfoPanel planet={selectedPlanet} onClose={() => setSelectedPlanet(null)} />}
    </>
  );
}
