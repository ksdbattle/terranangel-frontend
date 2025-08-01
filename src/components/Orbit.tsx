import { Line } from '@react-three/drei';
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
    // Convert Vector2 to Vector3 for the Line component
    return curve.getPoints(128).map(p => new THREE.Vector3(p.x, 0, p.y));
  }, [distance]);

  return <Line points={points} color="#444" lineWidth={1} />;
}
