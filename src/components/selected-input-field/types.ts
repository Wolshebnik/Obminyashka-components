export interface ISelectedInput {
  name: string;
  placeholder: string;
  containerName?: string;
  getCities?: (id: string) => Promise<ICityData[]>;
}

export interface ICityData {
  id?: string;
  name: string;
}
