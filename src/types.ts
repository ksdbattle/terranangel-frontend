export interface PlanetType {
  name: string;
  radius: number;
  distance: number;
  color: string;
  ring?: {
    innerRadius: number;
    outerRadius: number;
    color: string;
  };
  orbitalPeriod: number; // In Earth years
  initials: string;
  initialAngle?: number; // Optional initial angle in radians
}
