export interface ShipsModel {
  ships: ShipModel[];
}

export interface ShipModel {
  id: number;
  built: number;
  name: string;
  lengthMeters: number;
  beamMeters: number;
  maxTEU: number;
  owner: string;
  grossTonnage: number;
}
