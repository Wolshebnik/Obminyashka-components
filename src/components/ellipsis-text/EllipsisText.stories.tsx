import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Container } from './styles';
import { EllipsisText } from './index';
import { argTypes } from './arg-types';

export default {
  title: 'Ellipsis Text',
  component: EllipsisText,
  argTypes,
} as ComponentMeta<typeof EllipsisText>;

const text =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ';

const Template: ComponentStory<typeof EllipsisText> = (args) => (
  <Container>
    <EllipsisText {...args} />
  </Container>
);

export const EllipsisTextWithTooltip = Template.bind({});
EllipsisTextWithTooltip.args = {
  id: 'tooltip1',
  children: <span>{text}</span>,
};

export const WithAnotherTooltipDirection = Template.bind({});
WithAnotherTooltipDirection.args = {
  id: 'tooltip2',
  children: text,
  place: 'right-start',
  delayShow: 1000,
  delayHide: 1000,
};
