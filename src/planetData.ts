import { PlanetType } from './types';

export const planetData: PlanetType[] = [
  {
    name: 'Mercury',
    radius: 0.38,
    distance: 5,
    color: '#A9A9A9',
  },
  {
    name: 'Venus',
    radius: 0.95,
    distance: 7,
    color: '#FFA500',
  },
  {
    name: 'Earth',
    radius: 1,
    distance: 10,
    color: '#0000FF',
  },
  {
    name: 'Mars',
    radius: 0.53,
    distance: 15,
    color: '#FF4500',
  },
  {
    name: 'Jupiter',
    radius: 4.5, // Adjusted for visualization
    distance: 25,
    color: '#D2B48C',
  },
  {
    name: 'Saturn',
    radius: 3.8, // Adjusted for visualization
    distance: 38,
    color: '#F5DEB3',
    ring: {
      innerRadius: 5,
      outerRadius: 7,
      color: '#B0A084',
    },
  },
  {
    name: 'Uranus',
    radius: 2.0, // Adjusted for visualization
    distance: 50,
    color: '#ADD8E6',
  },
  {
    name: 'Neptune',
    radius: 1.9, // Adjusted for visualization
    distance: 60,
    color: '#4169E1',
  },
];
