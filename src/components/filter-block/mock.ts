import { ICategoryData } from './types';

export const cities = [
  { id: '90', name: 'Kyiv' },
  { id: '91', name: 'Dnepr' },
  { id: '92', name: 'Kharkiv' },
  { id: '93', name: 'Odessa' },
  { id: '94', name: 'Lviv' },
  { id: '95', name: 'Poltava' },
  { id: '96', name: 'Zaporizia' },
];

export const categoryData: ICategoryData[] = [
  {
    id: '1',
    name: 'clothes',
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
    name: 'shoes',
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
    name: 'toys',
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
    name: 'furniture',
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
    name: 'transport for children',
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
    name: 'books',
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
    name: 'carnival costumes',
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
    name: 'other',
    hiddenCheckbox: true,
    subCategories: [],
  },
];

export const filterData: ICategoryData[] = [
  {
    id: '9',
    name: 'location',
    type: 'input',
    subCategories: [
      {
        id: '52',
        name: 'region',
      },
      {
        id: '53',
        name: 'city',
      },
    ],
  },
  {
    id: '10',
    name: 'sex',
    type: 'radio',
    subCategories: [
      {
        id: '54',
        name: 'Boy',
      },
      {
        id: '55',
        name: 'Girl',
      },
      {
        id: '56',
        name: 'Will suit everyone',
      },
    ],
  },
  {
    id: '11',
    name: 'age',
    type: 'checkbox',
    subCategories: [
      {
        id: '57',
        name: '0',
      },
      {
        id: '58',
        name: '1 - 2',
      },
      {
        id: '59',
        name: '2 - 4',
      },
      {
        id: '60',
        name: '5 - 7',
      },
      {
        id: '61',
        name: '8 - 11',
      },
      {
        id: '62',
        name: '11 - 14',
      },
    ],
  },
  {
    id: '12',
    name: 'size(clothes)',
    type: 'checkbox',
    subCategories: [
      {
        id: '63',
        name: '50 -80 см',
      },
      {
        id: '64',
        name: '80 -92 см',
      },
      {
        id: '65',
        name: '92 - 110 см',
      },
      {
        id: '66',
        name: '110 - 122 см',
      },
      {
        id: '67',
        name: '122 - 146 см',
      },
      {
        id: '68',
        name: '146 - 164 см',
      },
    ],
  },
  {
    id: '13',
    name: 'size(shoes)',
    type: 'checkbox',
    subCategories: [
      {
        id: '69',
        name: '9,5 см - 16',
      },
      {
        id: '70',
        name: '10 см - 16,5',
      },
      {
        id: '71',
        name: '10,5 см - 17',
      },
      {
        id: '72',
        name: '11 см - 18',
      },
      {
        id: '73',
        name: '11,5 см - 19',
      },
      {
        id: '74',
        name: '12 см - 20',
      },
      {
        id: '75',
        name: '12,5 см - 21',
      },
      {
        id: '76',
        name: '13 см - 22',
      },
      {
        id: '77',
        name: '13,5 см - 23',
      },
      {
        id: '78',
        name: '14 см - 24',
      },
      {
        id: '79',
        name: '14,5 см - 25',
      },
      {
        id: '80',
        name: '15 см - 26',
      },
      {
        id: '81',
        name: '15,5 см - 27',
      },
      {
        id: '82',
        name: '16 см - 28',
      },
      {
        id: '83',
        name: '16,5 см - 29',
      },
    ],
  },
  {
    id: '14',
    name: 'season',
    type: 'checkbox',
    subCategories: [
      {
        id: '84',
        name: 'Demi-season',
      },
      {
        id: '85',
        name: 'Summer',
      },
      {
        id: '86',
        name: 'Winter',
      },
    ],
  },
];
