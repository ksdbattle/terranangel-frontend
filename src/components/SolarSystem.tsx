'use client';

import { PlanetType } from '@/types';
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Planet from './Planet';
import InfoPanel from './InfoPanel';
import Orbit from './Orbit';
import { planetData } from '@/planetData';

export default function SolarSystem() {
  const [planets, setPlanets] = useState<PlanetType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetType | null>(null);

  useEffect(() => {
    const fetchPlanetPositions = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies?data=semimajorAxis,meanAnomaly&filter[]=isPlanet,eq,true');
        const data = await response.json();
        
        const updatedPlanets = planetData.map(p => {
          const apiPlanet = data.bodies.find((b: any) => b.englishName.toLowerCase() === p.name.toLowerCase());
          if (apiPlanet) {
            const initialAngle = apiPlanet.meanAnomaly * (Math.PI / 180);
            return { ...p, initialAngle };
          }
          // Fallback for planets not found in API
          return { ...p, initialAngle: Math.random() * 2 * Math.PI };
        });
        setPlanets(updatedPlanets);
      } catch (error) {
        console.error("Failed to fetch planet positions, using random initial positions:", error);
        const randomPlanets = planetData.map(p => ({ ...p, initialAngle: Math.random() * 2 * Math.PI }));
        setPlanets(randomPlanets);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlanetPositions();
  }, []);

  const handlePlanetClick = (planet: PlanetType) => {
    if (selectedPlanet && selectedPlanet.name === planet.name) {
      // If the same planet is clicked again, close the panel
      setSelectedPlanet(null);
    } else {
      // Otherwise, show the new planet's info
      setSelectedPlanet(planet);
    }
  };

  return (
    <>
      <Canvas camera={{ position: [0, 40, 80], fov: 45 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 0, 0]} intensity={2.5} color="#FFDAB9" />
        <mesh>
          <sphereGeometry args={[2.5, 32, 32]} />
          <meshStandardMaterial color="#FFDAB9" emissive="#FFDAB9" emissiveIntensity={0.8} />
        </mesh>
        <OrbitControls enablePan={false} minDistance={10} maxDistance={150} />
        <Stars radius={300} depth={50} count={1500} factor={5} saturation={0} fade speed={0.5} />
        
        {/* Render orbits statically */}
        {planetData.map(planet => <Orbit key={`orbit-${planet.name}`} distance={planet.distance} />)}

        {/* Render planets only when data is loaded */}
        {!isLoading && planets.map((planet) => (
          <Planet key={planet.name} {...planet} onClick={() => handlePlanetClick(planet)} />
        ))}
        
        <EffectComposer>
          <Bloom intensity={1.2} kernelSize={3} luminanceThreshold={0.1} luminanceSmoothing={0.9} />
        </EffectComposer>
      </Canvas>
      {selectedPlanet && <InfoPanel planet={selectedPlanet} />}
    </>
  );
}
