import { ICategoryData } from './types';

export const regions = [
  { id: '90', name: 'Kyivska' },
  { id: '91', name: 'Dneprovska' },
  { id: '92', name: 'Kharkivska' },
  { id: '93', name: 'Odesska' },
  { id: '94', name: 'Lvivska' },
  { id: '95', name: 'Poltavska' },
  { id: '96', name: 'Zaporizska' },
];

export const cities = [
  { id: '97', name: 'Kyiv' },
  { id: '98', name: 'Dnepr' },
  { id: '99', name: 'Kharkiv' },
  { id: '100', name: 'Odessa' },
  { id: '101', name: 'Lviv' },
  { id: '102', name: 'Poltava' },
  { id: '103', name: 'Zaporizia' },
];

export const categoryData: ICategoryData[] = [
  {
    id: '1',
    name: 'category',
    title: 'clothes',
    hiddenCheckbox: true,
    subCategories: [
      {
        id: '15',
        name: 'Blouses, shirts',
      },
      {
        id: '16',
        name: 'Pants, jeans, shorts',
      },
      {
        id: '17',
        name: 'Upper robe',
      },
      {
        id: '18',
        name: 'Hats, scarves, mittens',
      },
      {
        id: '19',
        name: 'Clothes, sundresses, beddings',
      },
      {
        id: '20',
        name: 'Light, sweaters',
      },
      {
        id: '21',
        name: 'T-shirts, tops, t-shirts',
      },
      {
        id: '22',
        name: 'Tracksuits',
      },
      {
        id: '23',
        name: 'School uniform',
      },
    ],
  },
  {
    id: '2',
    name: 'category',
    title: 'shoes',
    hiddenCheckbox: true,
    subCategories: [
      {
        id: '24',
        name: 'Crosses, keds',
      },
      {
        id: '25',
        name: 'Boots',
      },
      {
        id: '26',
        name: 'Sandals, slippers',
      },
      {
        id: '27',
        name: 'Shoes, moccasins',
      },
      {
        id: '28',
        name: 'Other',
      },
    ],
  },
  {
    id: '3',
    name: 'category',
    title: 'toys',
    hiddenCheckbox: true,
    subCategories: [
      {
        id: '29',
        name: 'Toys for babies',
      },
      {
        id: '30',
        name: 'Machines and equipment',
      },
      {
        id: '31',
        name: 'Stuffed animals',
      },
      {
        id: '32',
        name: 'Constructors',
      },
      {
        id: '33',
        name: 'Dolls, figurines',
      },
    ],
  },
  {
    id: '4',
    name: 'category',
    title: 'furniture',
    hiddenCheckbox: true,
    subCategories: [
      {
        id: '34',
        name: 'Baby cots',
      },
      {
        id: '35',
        name: 'Bunk beds',
      },
      {
        id: '36',
        name: 'Manege',
      },
      {
        id: '37',
        name: 'Tables, chairs',
      },
      {
        id: '38',
        name: 'Feeding chair',
      },
      {
        id: '39',
        name: 'Car seat',
      },
    ],
  },
  {
    id: '5',
    name: 'category',
    title: 'transport for children',
    hiddenCheckbox: true,
    subCategories: [
      {
        id: '40',
        name: 'Strollers',
      },
      {
        id: '41',
        name: 'Scooters, bicycles',
      },
      {
        id: '42',
        name: 'Machines',
      },
    ],
  },
  {
    id: '6',
    name: 'category',
    title: 'books',
    hiddenCheckbox: true,
    subCategories: [
      {
        id: '43',
        name: 'Toy books',
      },
      {
        id: '44',
        name: 'Cognitive books',
      },
      {
        id: '45',
        name: 'Fiction',
      },
      {
        id: '46',
        name: 'School books',
      },
      {
        id: '47',
        name: 'Encyclopedias',
      },
    ],
  },
  {
    id: '7',
    name: 'category',
    title: 'carnival costumes',
    hiddenCheckbox: true,
    subCategories: [
      {
        id: '48',
        name: 'Animals (bunny, bear, fox)',
      },
      {
        id: '49',
        name: 'Professions (Cook, fireman, policeman)',
      },
      {
        id: '50',
        name: 'Cartoon characters',
      },
      {
        id: '51',
        name: 'Other',
      },
    ],
  },
  {
    id: '8',
    name: 'category',
    title: 'other',
    hiddenCheckbox: true,
    subCategories: [],
  },
];

export const filterData: ICategoryData[] = [
  {
    id: '9',
    name: 'location',
    title: 'location',
    type: 'input',
    subCategories: [
      {
        id: '52',
        name: 'region',
        containerName: 'city',
      },
      {
        id: '53',
        name: 'city',
      },
    ],
  },
  {
    name: 'sex',
    title: 'sex',
    type: 'radio',
    subCategories: [
      {
        name: 'Boy',
        paramToSet: 'MALE',
      },
      {
        name: 'Girl',
        paramToSet: 'FEMALE',
      },
      {
        name: 'Will suit everyone',
        paramToSet: 'UNSELECTED',
      },
    ],
  },
  {
    name: 'age',
    title: 'age',
    type: 'checkbox',
    subCategories: [
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
    name: 'size(clothes)',
    title: 'size(clothes)',
    type: 'checkbox',
    subCategories: [
      {
        name: '50 - 80 cm',
        paramToSet: '50 - 80',
      },
      {
        name: '80 - 92 cm',
        paramToSet: '80 - 92',
      },
      {
        name: '92 - 110 cm',
        paramToSet: '92 - 110',
      },
      {
        name: '110 - 122 cm',
        paramToSet: '110 - 122',
      },
      {
        name: '122 - 146 cm',
        paramToSet: '122 - 146',
      },
      {
        name: '146 - 164 cm',
        paramToSet: '146 - 164',
      },
    ],
  },
  {
    name: 'size(shoes)',
    title: 'size(shoes)',
    type: 'checkbox',
    subCategories: [
      {
        name: '9,5 - 16 cm',
        paramToSet: '9,5 - 16',
      },
      {
        name: '10 - 16,5 cm',
        paramToSet: '10 - 16,5',
      },
      {
        name: '10,5 - 17 cm',
        paramToSet: '10,5 - 17',
      },
      {
        name: '11 - 18 cm',
        paramToSet: '11 - 18',
      },
      {
        name: '11,5 - 19 cm',
        paramToSet: '11,5 - 19',
      },
      {
        name: '12 - 20 cm',
        paramToSet: '12 - 20',
      },
      {
        name: '12,5 - 21 cm',
        paramToSet: '12,5 - 21',
      },
      {
        name: '13 - 22 cm',
        paramToSet: '13 - 22',
      },
      {
        name: '13,5 - 23 cm',
        paramToSet: '13,5 - 23',
      },
      {
        name: '14 - 24 cm',
        paramToSet: '14 - 24',
      },
      {
        name: '14,5 - 25 cm',
        paramToSet: '14,5 - 25',
      },
      {
        name: '15 - 26 cm',
        paramToSet: '15 - 26',
      },
      {
        name: '15,5 - 27 cm',
        paramToSet: '15,5 - 27',
      },
      {
        name: '16 - 28 cm',
        paramToSet: '16 - 28',
      },
      {
        name: '16,5 - 29 cm',
        paramToSet: '16,5 - 29',
      },
    ],
  },
  {
    name: 'season',
    title: 'season',
    type: 'checkbox',
    subCategories: [
      {
        name: 'Demi-season',
        paramToSet: 'DEMI_SEASON',
      },
      {
        name: 'Summer',
        paramToSet: 'SUMMER',
      },
      {
        name: 'Winter',
        paramToSet: 'WINTER',
      },
      {
        name: 'All seasons',
        paramToSet: 'NO_SEASONS',
      },
    ],
  },
];
