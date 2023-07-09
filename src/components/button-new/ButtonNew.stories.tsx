import type { Meta, StoryObj } from '@storybook/react';

import { ButtonNew } from '.';
import { argTypes } from './arg-types';
import { IStyledButtonNew } from './types';

const meta = {
  title: 'ButtonNew',
  component: ButtonNew,
  argTypes,
} satisfies Meta<typeof ButtonNew>;

export default meta;
type Story = StoryObj<typeof ButtonNew>;

const Template = (args: IStyledButtonNew) => {
  return (
    <div
      style={{
        width: '290px',
      }}
    >
      <ButtonNew text={''} {...args} />
    </div>
  );
};

export const GreenButton: Story = {
  args: {
    plus: true,
    animated: true,
    disabled: false,
    colorType: 'green',
    styleType: 'default',
    text: 'Add advertisement',
  },
  render: (args) => <Template {...args} />,
};

export const BlueButton: Story = {
  args: {
    plus: false,
    text: 'View',
    animated: true,
    disabled: false,
    colorType: 'blue',
    styleType: 'default',
  },
  render: (args) => <Template {...args} />,
};

export const OutLineButton: Story = {
  args: {
    plus: false,
    animated: false,
    disabled: false,
    text: 'Show more',
    colorType: 'blue',
    styleType: 'outline',
  },
  render: (args) => <Template {...args} />,
};
