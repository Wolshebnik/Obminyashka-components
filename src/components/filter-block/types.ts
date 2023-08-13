export interface ISubCategory {
  name: string;
  type?: string;
}
export interface ICategory {
  type?: string;
  categoryTitle: string;
  subCategories: ISubCategory[];
}
export interface ICategoryData {
  title: string;
  categories: ICategory[];
}
