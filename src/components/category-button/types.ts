export interface ICategoryInfo {
  link: string;
  img?: string;
  sun?: string;
  text: string;
}

export interface IBtnCategoryProps {
  delay?: number;
  textBtn: string;
  categoryInfo: ICategoryInfo[];
}
