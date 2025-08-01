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
}
