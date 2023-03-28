import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PhotoFiles } from '.';

export default {
  title: 'PhotoFiles',
  component: PhotoFiles,
} as ComponentMeta<typeof PhotoFiles>;

const Template: ComponentStory<typeof PhotoFiles> = (args) => (
  <PhotoFiles {...args} />
);

export const PhotoFilesDefault = Template.bind({});
PhotoFilesDefault.args = {
  description: 'Завантажте фотографії ваших речей',
  firstUploadText: 'Перше фото стане обкладинкою картки товару',
  photosUploaded: 'Завантажено фотографій',
  preposition: 'з',
};
