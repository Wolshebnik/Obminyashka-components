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
