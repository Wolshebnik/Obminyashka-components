import { ISelectOption } from './type';

export interface ISelectMock {
  value: string;
  title: string;
  options?: ISelectOption[];
}

export const select: ISelectMock = {
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
    {
      value: '24',
      text: 'School uniform',
    },
    {
      value: '25',
      text: 'School uniform',
    },
    {
      value: '26',
      text: 'School uniform',
    },
  ],
};
