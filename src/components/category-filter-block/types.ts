export interface ISubCategoriesData {
  name: string;
  id: number;
}

export interface MockData {
  id: number;
  title: string;
  subCategories: ISubCategoriesData[];
}
