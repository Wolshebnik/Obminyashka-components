import { MockData } from './types';

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
