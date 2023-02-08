import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image } from '.';
import { argTypes } from './arg-types';

const url =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RU6qRg_WySsA_1L3g8epabIBD7WejcWTcf70n5Thi9O_aGWnf20ypkJ3len0A4MV9l0&usqp=CAU';

export default {
  title: 'Image',
  component: Image,
  argTypes,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const ImageDefault = Template.bind({});
ImageDefault.args = {
  source: url,
};

export const ImageMiddle = Template.bind({});
ImageMiddle.args = {
  width: 50,
  height: 50,
  source: url,
};

export const ImageBig = Template.bind({});
ImageBig.args = {
  width: 100,
  height: 100,
  source: url,
};
