import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputFile } from '.';
import * as Styles from './styles';
import { InputOnChangeEventType } from './types';

export default {
  title: 'InputFile',
  component: InputFile,
} as ComponentMeta<typeof InputFile>;

const Template: ComponentStory<typeof InputFile> = (args) => {
  const onChange = (e: InputOnChangeEventType, files?: File[]) => {
    // eslint-disable-next-line no-console
    console.log({ e, files });
  };
  return (
    <Styles.WrapFiles>
      <InputFile {...args} onChange={onChange} />
    </Styles.WrapFiles>
  );
};
export const InputFileDefault = Template.bind({});
InputFileDefault.args = {
  type: 'file',
  name: 'images',
  error: 'Error',
};
