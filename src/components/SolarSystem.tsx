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
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} />
        <mesh>
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial color="yellow" />
        </mesh>
        <OrbitControls />
        {planetData.map((planet, index) => (
          <Planet key={index} {...planet} onClick={() => setSelectedPlanet(planet)} />
        ))}
        <EffectComposer>
          <Bloom intensity={0.6} kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.9} />
        </EffectComposer>
      </Canvas>
      {selectedPlanet && <InfoPanel planet={selectedPlanet} onClose={() => setSelectedPlanet(null)} />}
    </>
  );
}
