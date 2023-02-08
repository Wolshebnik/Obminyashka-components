import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image } from '.';

export default {
  title: 'Image',
  component: Image,
  argTypes: {
    width: {
      name: 'width',
      type: { name: 'string' },
      description: 'CSS width',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 30 },
      },
      control: { type: 'number' },
    },
    height: {
      name: 'height',
      type: { name: 'string' },
      description: 'CSS height',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 28 },
      },
      control: { type: 'number' },
    },
    source: {
      name: 'source',
      type: { name: 'string' },
      description: 'Image',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const ImageDefault = Template.bind({});
ImageDefault.args = {
  width: 30,
  height: 28,
  source:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RU6qRg_WySsA_1L3g8epabIBD7WejcWTcf70n5Thi9O_aGWnf20ypkJ3len0A4MV9l0&usqp=CAU',
};

export const ImageMiddle = Template.bind({});
ImageMiddle.args = {
  width: 50,
  height: 50,
  source:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RU6qRg_WySsA_1L3g8epabIBD7WejcWTcf70n5Thi9O_aGWnf20ypkJ3len0A4MV9l0&usqp=CAU',
};

export const ImageBig = Template.bind({});
ImageBig.args = {
  width: 100,
  height: 100,
  source:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RU6qRg_WySsA_1L3g8epabIBD7WejcWTcf70n5Thi9O_aGWnf20ypkJ3len0A4MV9l0&usqp=CAU',
};
