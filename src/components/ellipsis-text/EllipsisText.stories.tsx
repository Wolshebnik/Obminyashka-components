import type { Meta, StoryObj } from '@storybook/react';

import { Container } from './styles';
import { EllipsisText } from './index';
import { argTypes } from './arg-types';

const text =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

const meta = {
  title: 'Ellipsis Text',
  component: EllipsisText,
  argTypes,
} satisfies Meta<typeof EllipsisText>;

export default meta;
type Story = StoryObj<typeof EllipsisText>;

export const EllipsisTextWithTooltip: Story = {
  args: {
    id: 'tooltip1',
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

export const TooltipWithArrow: Story = {
  ...EllipsisTextWithTooltip,
  args: {
    offset: 20,
    width: 500,
    id: 'tooltip2',
    place: 'right',
    noArrow: false,
    children: text,
    delayShow: 1000,
    delayHide: 1000,
  },
};
