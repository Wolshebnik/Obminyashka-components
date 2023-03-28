import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ErrorDisplay } from '.';
import { argTypes } from './arg-types';

export default {
  title: 'Error',
  component: ErrorDisplay,
  argTypes,
} as ComponentMeta<typeof ErrorDisplay>;

const Template: ComponentStory<typeof ErrorDisplay> = (args) => (
  <ErrorDisplay {...args} />
);

export const ErrorDefault = Template.bind({});
ErrorDefault.args = {
  error: 'You did something wrong...',
};
