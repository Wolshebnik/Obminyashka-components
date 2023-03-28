import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ImagePhoto } from '.';

const img =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWpqMR4TN3yFuF_ppD8BNQX8tWnclcfM_2Uw&usqp=CAU';

export default {
  title: 'ImagePhoto',
  component: ImagePhoto,
} as ComponentMeta<typeof ImagePhoto>;

const Template: ComponentStory<typeof ImagePhoto> = (args) => (
  <ImagePhoto {...args} />
);

export const ImagePhotoDefault = Template.bind({});
ImagePhotoDefault.args = {
  url: img,
};
