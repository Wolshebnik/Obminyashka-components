import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './index';
import { Container } from './styles';
import { argTypes } from './arg-types';

const text =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

const meta = {
  title: 'Tooltip',
  component: Tooltip,
  argTypes,
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const TooltipWithDefault: Story = {
  args: {
    children: <span>{text}</span>,
  },
  render: (args) => {
    const { children, ...rest } = args;

    return (
      <Container>
        <Tooltip {...rest}>{children}</Tooltip>
      </Container>
    );
  },
};
