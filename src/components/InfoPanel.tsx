'use client';

import { PlanetType } from '@/types';
import { motion } from 'framer-motion';

interface InfoPanelProps {
  planet: PlanetType;
  onClose: () => void;
}

export default function InfoPanel({ planet, onClose }: InfoPanelProps) {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '300px',
        height: '100%',
        borderLeft: '2px solid #0ff',
        boxShadow: '0 0 20px #0ff',
        fontFamily: 'VT323, monospace',
        backgroundColor: 'rgba(0, 20, 30, 0.8)',
        padding: '2rem',
        color: '#0ff',
      }}
    >
      <h2 style={{ textShadow: '0 0 5px #0ff' }}>{planet.name}</h2>
      <p>Radius: {planet.radius}</p>
      <p>Distance from Sun: {planet.distance}</p>
      <button 
        onClick={onClose}
        style={{
          background: '#0ff',
          border: 'none',
          color: '#000',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          fontFamily: 'VT323, monospace',
        }}
      >Close</button>
    </motion.div>
  );
}
