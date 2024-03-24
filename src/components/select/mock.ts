import { ISelectOption } from './types';

export interface ISelectMock {
  value: string;
  title: string;
  disabled?: number;
  multiple?: boolean;
  filtration?: boolean;
  notCheckbox?: boolean;
  deleteOnClose?: boolean;
  options?: ISelectOption[];
}

export const categoryData: ISelectMock[] = [
  {
    value: '1',
    title: 'clothes',
    multiple: true,
    deleteOnClose: true,
    notCheckbox: true,
    options: [
      {
        value: '15',
        text: 'Blouses, shirts',
      },
      {
        value: '16',
        text: 'Pants, jeans, shorts',
      },
      {
        value: '17',
        text: 'Upper robe',
      },
      {
        value: '18',
        text: 'Hats, scarves, mittens',
      },
      {
        value: '19',
        text: 'Clothes, sundresses, beddings',
      },
      {
        value: '20',
        text: 'Light, sweaters',
      },
      {
        value: '21',
        text: 'T-shirts, tops, t-shirts',
      },
      {
        value: '22',
        text: 'Tracksuits',
      },
      {
        value: '23',
        text: 'School uniform',
      },
    ],
  },
  {
    value: '2',
    title: 'shoes',
    multiple: true,
    notCheckbox: true,
    deleteOnClose: true,
    options: [
      {
        value: '24',
        text: 'Crosses, keds',
      },
      {
        value: '25',
        text: 'Boots',
      },
      {
        value: '26',
        text: 'Sandals, slippers',
      },
      {
        value: '27',
        text: 'Shoes, moccasins',
      },
      {
        value: '28',
        text: 'Other',
      },
    ],
  },
  {
    value: '3',
    title: 'toys',
    multiple: true,
    notCheckbox: true,
    deleteOnClose: true,
    options: [
      {
        value: '29',
        text: 'Toys for babies',
      },
      {
        value: '30',
        text: 'Machines and equipment',
      },
      {
        value: '31',
        text: 'Stuffed animals',
      },
      {
        value: '32',
        text: 'Constructors',
      },
      {
        value: '33',
        text: 'Dolls, figurines',
      },
    ],
  },
  {
    value: '4',
    title: 'furniture',
    multiple: true,
    notCheckbox: true,
    deleteOnClose: true,
    options: [
      {
        value: '34',
        text: 'Baby cots',
      },
      {
        value: '35',
        text: 'Bunk beds',
      },
      {
        value: '36',
        text: 'Manege',
      },
      {
        value: '37',
        text: 'Tables, chairs',
      },
      {
        value: '38',
        text: 'Feeding chair',
      },
      {
        value: '39',
        text: 'Car seat',
      },
    ],
  },
  {
    value: '5',
    title: 'transport for children',
    multiple: true,
    notCheckbox: true,
    deleteOnClose: true,
    options: [
      {
        value: '40',
        text: 'Strollers',
      },
      {
        value: '41',
        text: 'Scooters, bicycles',
      },
      {
        value: '42',
        text: 'Machines',
      },
    ],
  },
  {
    value: '6',
    title: 'books',
    multiple: true,
    notCheckbox: true,
    deleteOnClose: true,
    options: [
      {
        value: '43',
        text: 'Toy books',
      },
      {
        value: '44',
        text: 'Cognitive books',
      },
      {
        value: '45',
        text: 'Fiction',
      },
      {
        value: '46',
        text: 'School books',
      },
      {
        value: '47',
        text: 'Encyclopedias',
      },
    ],
  },
  {
    value: '7',
    title: 'carnival costumes',
    multiple: true,
    notCheckbox: true,
    deleteOnClose: true,
    options: [
      {
        value: '48',
        text: 'Animals (bunny, bear, fox)',
      },
      {
        value: '49',
        text: 'Professions (Cook, fireman, policeman)',
      },
      {
        value: '50',
        text: 'Cartoon characters',
      },
      {
        value: '51',
        text: 'Other',
      },
    ],
  },
  {
    value: '8',
    title: 'other',
    multiple: true,
    notCheckbox: true,
    deleteOnClose: true,
    options: [],
  },
];

export const regions = [
  { value: '90', text: 'Kyivska' },
  { value: '91', text: 'Dneprovska' },
  { value: '92', text: 'Kharkivska' },
  { value: '93', text: 'Odesska' },
  { value: '94', text: 'Lvivska' },
  { value: '95', text: 'Poltavska' },
  { value: '96', text: 'Zaporizska' },
];

export const cities = [
  { value: '97', text: 'Kyiv' },
  { value: '98', text: 'Dnepr' },
  { value: '99', text: 'Kharkiv' },
  { value: '100', text: 'Odessa' },
  { value: '101', text: 'Lviv' },
  { value: '102', text: 'Poltava' },
  { value: '103', text: 'Zaporizia' },
];

export const filterData: ISelectMock[] = [
  {
    value: 'sex',
    title: 'sex',
    options: [
      {
        value: 'Boy',
        text: 'Boy',
      },
      {
        value: 'Girl',
        text: 'Girl',
      },
      {
        value: 'Will suit everyone',
        text: 'Will suit everyone',
      },
    ],
  },
  {
    value: 'age',
    title: 'age',
    multiple: true,
    options: [
      {
        value: '0',
        text: '0',
      },
      {
        value: '1 - 2',
        text: '1 - 2',
      },
      {
        value: '2 - 4',
        text: '2 - 4',
      },
      {
        value: '5 - 7',
        text: '5 - 7',
      },
      {
        value: '8 - 11',
        text: '8 - 11',
      },
      {
        value: '11 - 14',
        text: '11 - 14',
      },
    ],
  },
  {
    value: 'sizeClothes',
    title: 'size(clothes)',
    disabled: 0,
    multiple: true,
    options: [
      {
        value: '50 - 80 cm',
        text: '50 - 80 cm',
      },
      {
        value: '80 - 92 cm',
        text: '80 - 92 cm',
      },
      {
        value: '92 - 110 cm',
        text: '92 - 110 cm',
      },
      {
        value: '110 - 122 cm',
        text: '110 - 122 cm',
      },
      {
        value: '122 - 146 cm',
        text: '122 - 146 cm',
      },
      {
        value: '146 - 164 cm',
        text: '146 - 164 cm',
      },
    ],
  },
  {
    value: 'sizeShoes',
    title: 'size(shoes)',
    disabled: 1,
    multiple: true,
    options: [
      {
        value: '9,5 - 16 cm',
        text: '9,5 - 16 cm',
      },
      {
        value: '10 - 16,5 cm',
        text: '10 - 16,5 cm',
      },
      {
        value: '10,5 - 17 cm',
        text: '10,5 - 17 cm',
      },
      {
        value: '11 - 18 cm',
        text: '11 - 18 cm',
      },
      {
        value: '11,5 - 19 cm',
        text: '11,5 - 19 cm',
      },
      {
        value: '12 - 20 cm',
        text: '12 - 20 cm',
      },
      {
        value: '12,5 - 21 cm',
        text: '12,5 - 21 cm',
      },
      {
        value: '13 - 22 cm',
        text: '13 - 22 cm',
      },
      {
        value: '13,5 - 23 cm',
        text: '13,5 - 23 cm',
      },
      {
        value: '14 - 24 cm',
        text: '14 - 24 cm',
      },
      {
        value: '14,5 - 25 cm',
        text: '14,5 - 25 cm',
      },
      {
        value: '15 - 26 cm',
        text: '15 - 26 cm',
      },
      {
        value: '15,5 - 27 cm',
        text: '15,5 - 27 cm',
      },
      {
        value: '16 - 28 cm',
        text: '16 - 28 cm',
      },
      {
        value: '16,5 - 29 cm',
        text: '16,5 - 29 cm',
      },
    ],
  },
  {
    value: 'season',
    title: 'season',
    multiple: true,
    options: [
      {
        value: 'Demi-season',
        text: 'Demi-season',
      },
      {
        value: 'Summer',
        text: 'Summer',
      },
      {
        value: 'Winter',
        text: 'Winter',
      },
      {
        value: 'All seasons',
        text: 'All seasons',
      },
    ],
  },
];
