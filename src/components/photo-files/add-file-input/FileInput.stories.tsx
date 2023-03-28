import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AddFileInput } from '.';
import * as Styles from './styles';

export default {
  title: 'AddFileInput',
  component: AddFileInput,
} as ComponentMeta<typeof AddFileInput>;

const Template: ComponentStory<typeof AddFileInput> = (args) => (
  <Styles.WrapFiles>
    <AddFileInput {...args} />
  </Styles.WrapFiles>
);

export const InputFileDefault = Template.bind({});
InputFileDefault.args = {};
