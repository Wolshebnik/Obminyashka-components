export interface ICategoriesData {
  id: number;
  title: string;
  disabled?: string[];
  isOpenCategory?: boolean;
  selectedCategory?: string;
  options: ISubCategoriesData[];
  setLocationId?: (str: string) => void;
  getCities?: () => Promise<ILocation[]>;
  getRegions?: () => Promise<ILocation[]>;
  setIsOpenCategory?: (num: number) => void;
  setIsSelectedCategory?: (str: string) => void;
  type: 'input' | 'checkbox' | 'radio' | 'category';
}

export interface ISubCategoriesData {
  name: string;
  id?: number | string;
}

export interface MockData {
  id: number;
  title: string;
  options: ISubCategoriesData[];
  type: 'input' | 'checkbox' | 'radio' | 'category';
}

interface ILocationWithId {
  id: string;
  name: string;
}

interface ILocationWithoutId {
  name: string;
}

export type ILocation = ILocationWithId | ILocationWithoutId;
