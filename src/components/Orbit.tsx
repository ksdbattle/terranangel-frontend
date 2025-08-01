'use client';

import * as THREE from 'three';
import { useMemo } from 'react';

interface OrbitProps {
  distance: number;
}

export default function Orbit({ distance }: OrbitProps) {
  const points = useMemo(() => {
    const curve = new THREE.EllipseCurve(
      0, 0,             // ax, aY
      distance, distance, // xRadius, yRadius
      0, 2 * Math.PI,   // aStartAngle, aEndAngle
      false,            // aClockwise
      0                 // aRotation
    );
    return curve.getPoints(128);
  }, [distance]);

  return (
    <line>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap(p => [p.x, 0, p.y]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial attach="material" color="#333" linewidth={1} />
    </line>
  );
}
