import { regions } from './mock';

export const initialValues = {
  age: [],
  sex: '',
  season: [],
  shoesSize: [],
  clothingSizes: [],
  category: {
    id: '',
    subcategories: [],
    activeCategory: '',
  },
  region: {
    id: '',
    location: regions,
    inputValue: '',
  },
  city: {
    id: '',
    location: [],
    inputValue: '',
  },
};
