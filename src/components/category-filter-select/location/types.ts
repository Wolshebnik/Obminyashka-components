export interface ISelectedInput {
  name: string;
  placeholder: string;
  cities?: ILocation[];
  regions?: ILocation[];
  setLocationId?: (str: string) => void;
}

export interface ILocation {
  id: string;
  name: string;
}
