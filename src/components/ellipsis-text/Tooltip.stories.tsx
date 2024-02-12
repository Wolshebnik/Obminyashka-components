import type { Meta, StoryObj } from '@storybook/react';

import { Container } from './styles';
import { EllipsisText } from './index';
import { argTypes } from './arg-types';

const text =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

const meta = {
  title: 'EllipsisText',
  component: EllipsisText,
  argTypes,
} satisfies Meta<typeof EllipsisText>;

export default meta;
type Story = StoryObj<typeof EllipsisText>;

export const TooltipDefault: Story = {
  args: {
    children: <span>{text}</span>,
  },
  render: (args) => {
    const { children, ...rest } = args;

    return (
      <Container>
        <EllipsisText {...rest}>{children}</EllipsisText>
      </Container>
    );
  },
};
