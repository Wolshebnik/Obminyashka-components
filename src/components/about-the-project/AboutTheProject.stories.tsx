import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AboutTheProject } from '.';
import { argTypes } from './arg-types';

export default {
  title: 'AboutTheProject',
  component: AboutTheProject,
  argTypes,
} as ComponentMeta<typeof AboutTheProject>;

const Template: ComponentStory<typeof AboutTheProject> = (args) => {
  return <AboutTheProject {...args} />;
};

export const DefaultLink = Template.bind({});
DefaultLink.args = {
  text: 'About the project',
};
