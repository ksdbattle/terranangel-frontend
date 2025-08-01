import { PlanetType } from './types';

export const planetData: PlanetType[] = [
  {
    name: 'Mercury',
    radius: 0.38,
    distance: 5,
    color: '#A9A9A9',
    orbitalPeriod: 0.24,
    initials: 'ME',
  },
  {
    name: 'Venus',
    radius: 0.95,
    distance: 7,
    color: '#FFA500',
    orbitalPeriod: 0.62,
    initials: 'V',
  },
  {
    name: 'Earth',
    radius: 1,
    distance: 10,
    color: '#6B93D6', // A more realistic, pale blue dot
    orbitalPeriod: 1,
    initials: 'E',
  },
  {
    name: 'Mars',
    radius: 0.53,
    distance: 15,
    color: '#FF4500',
    orbitalPeriod: 1.88,
    initials: 'MA',
  },
  {
    name: 'Jupiter',
    radius: 4.5,
    distance: 25,
    color: '#D2B48C',
    orbitalPeriod: 11.86,
    initials: 'J',
  },
  {
    name: 'Saturn',
    radius: 3.8,
    distance: 38,
    color: '#F5DEB3',
    ring: {
      innerRadius: 5,
      outerRadius: 7,
      color: '#B0A084',
    },
    orbitalPeriod: 29.46,
    initials: 'S',
  },
  {
    name: 'Uranus',
    radius: 2.0,
    distance: 50,
    color: '#ADD8E6',
    orbitalPeriod: 84.01,
    initials: 'U',
  },
  {
    name: 'Neptune',
    radius: 1.9,
    distance: 60,
    color: '#4169E1',
    orbitalPeriod: 164.8,
    initials: 'N',
  },
];
