import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TooltipElement } from './index';

export default {
  title: 'Tooltip',
  component: TooltipElement,
} as ComponentMeta<typeof TooltipElement>;

const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const Template: ComponentStory<typeof TooltipElement> = (args) => (
  <TooltipElement {...args} />
);
export const Primary = Template.bind({});
Primary.args = {
  anchorId: 'app-title',
  place: 'bottom',
  content: "Hello world! I'm a Tooltip",
};
