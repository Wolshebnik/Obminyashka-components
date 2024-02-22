import { MockData } from './types';

export const categoryData: MockData[] = [
  {
    id: 1,
    title: 'clothes',
    type: 'category',
    options: [
      {
        id: 15,
        name: 'Blouses, shirts',
      },
      {
        id: 16,
        name: 'Pants, jeans, shorts',
      },
      {
        id: 17,
        name: 'Upper robe',
      },
      {
        id: 18,
        name: 'Hats, scarves, mittens',
      },
      {
        id: 19,
        name: 'Clothes, sundresses, beddings',
      },
      {
        id: 20,
        name: 'Light, sweaters',
      },
      {
        id: 21,
        name: 'T-shirts, tops, t-shirts',
      },
      {
        id: 22,
        name: 'Tracksuits',
      },
      {
        id: 23,
        name: 'School uniform',
      },
    ],
  },
  {
    id: 2,
    title: 'shoes',
    type: 'category',
    options: [
      {
        id: 24,
        name: 'Crosses, keds',
      },
      {
        id: 25,
        name: 'Boots',
      },
      {
        id: 26,
        name: 'Sandals, slippers',
      },
      {
        id: 27,
        name: 'Shoes, moccasins',
      },
      {
        id: 28,
        name: 'Other',
      },
    ],
  },
  {
    id: 3,
    title: 'toys',
    type: 'category',
    options: [
      {
        id: 29,
        name: 'Toys for babies',
      },
      {
        id: 30,
        name: 'Machines and equipment',
      },
      {
        id: 31,
        name: 'Stuffed animals',
      },
      {
        id: 32,
        name: 'Constructors',
      },
      {
        id: 33,
        name: 'Dolls, figurines',
      },
    ],
  },
  {
    id: 4,
    title: 'furniture',
    type: 'category',
    options: [
      {
        id: 34,
        name: 'Baby cots',
      },
      {
        id: 35,
        name: 'Bunk beds',
      },
      {
        id: 36,
        name: 'Manege',
      },
      {
        id: 37,
        name: 'Tables, chairs',
      },
      {
        id: 38,
        name: 'Feeding chair',
      },
      {
        id: 39,
        name: 'Car seat',
      },
    ],
  },
  {
    id: 5,
    title: 'transport for children',
    type: 'category',
    options: [
      {
        id: 40,
        name: 'Strollers',
      },
      {
        id: 41,
        name: 'Scooters, bicycles',
      },
      {
        id: 42,
        name: 'Machines',
      },
    ],
  },
  {
    id: 6,
    title: 'books',
    type: 'category',
    options: [
      {
        id: 43,
        name: 'Toy books',
      },
      {
        id: 44,
        name: 'Cognitive books',
      },
      {
        id: 45,
        name: 'Fiction',
      },
      {
        id: 46,
        name: 'School books',
      },
      {
        id: 47,
        name: 'Encyclopedias',
      },
    ],
  },
  {
    id: 7,
    title: 'carnival costumes',
    type: 'category',
    options: [
      {
        id: 48,
        name: 'Animals (bunny, bear, fox)',
      },
      {
        id: 49,
        name: 'Professions (Cook, fireman, policeman)',
      },
      {
        id: 50,
        name: 'Cartoon characters',
      },
      {
        id: 51,
        name: 'Other',
      },
    ],
  },
  {
    id: 8,
    title: 'other',
    type: 'category',
    options: [],
  },
];

export const filterData: MockData[] = [
  {
    id: 9,
    title: 'location',
    type: 'input',
    options: [
      {
        id: 52,
        name: 'region',
      },
      {
        id: 53,
        name: 'city',
      },
    ],
  },
  {
    id: 10,
    title: 'sex',
    type: 'radio',
    options: [
      {
        name: 'Boy',
      },
      {
        name: 'Girl',
      },
      {
        name: 'Will suit everyone',
      },
    ],
  },
  {
    id: 11,
    title: 'age',
    type: 'checkbox',
    options: [
      {
        name: '0',
      },
      {
        name: '1 - 2',
      },
      {
        name: '2 - 4',
      },
      {
        name: '5 - 7',
      },
      {
        name: '8 - 11',
      },
      {
        name: '11 - 14',
      },
    ],
  },
  {
    id: 12,
    title: 'size(clothes)',
    type: 'checkbox',
    options: [
      {
        name: '50 - 80 cm',
      },
      {
        name: '80 - 92 cm',
      },
      {
        name: '92 - 110 cm',
      },
      {
        name: '110 - 122 cm',
      },
      {
        name: '122 - 146 cm',
      },
      {
        name: '146 - 164 cm',
      },
    ],
  },
  {
    id: 13,
    title: 'size(shoes)',
    type: 'checkbox',
    options: [
      {
        name: '9,5 - 16 cm',
      },
      {
        name: '10 - 16,5 cm',
      },
      {
        name: '10,5 - 17 cm',
      },
      {
        name: '11 - 18 cm',
      },
      {
        name: '11,5 - 19 cm',
      },
      {
        name: '12 - 20 cm',
      },
      {
        name: '12,5 - 21 cm',
      },
      {
        name: '13 - 22 cm',
      },
      {
        name: '13,5 - 23 cm',
      },
      {
        name: '14 - 24 cm',
      },
      {
        name: '14,5 - 25 cm',
      },
      {
        name: '15 - 26 cm',
      },
      {
        name: '15,5 - 27 cm',
      },
      {
        name: '16 - 28 cm',
      },
      {
        name: '16,5 - 29 cm',
      },
    ],
  },
  {
    id: 14,
    title: 'season',
    type: 'checkbox',
    options: [
      {
        name: 'Demi-season',
      },
      {
        name: 'Summer',
      },
      {
        name: 'Winter',
      },
      {
        name: 'All seasons',
      },
    ],
  },
];
