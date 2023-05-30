export interface ICategoryInfo {
  link: string;
  text: string;
}

export interface IBtnCategoryProps {
  delay?: number;
  textBtn: string;
  categoryInfo: ICategoryInfo[];
}
