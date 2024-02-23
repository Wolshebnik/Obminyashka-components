export interface ISelectedInput {
  name: string;
  placeholder: string;
  setLocationId?: (str: string) => void;
  getCities?: () => Promise<ILocation[]>;
  getRegions?: () => Promise<ILocation[]>;
}

export interface ILocation {
  id: string;
  name: string;
}
