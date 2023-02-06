import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image } from '.';

export default {
  title: 'Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const ImageDefault = Template.bind({});

ImageDefault.args = {
  source:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RU6qRg_WySsA_1L3g8epabIBD7WejcWTcf70n5Thi9O_aGWnf20ypkJ3len0A4MV9l0&usqp=CAU',
};
