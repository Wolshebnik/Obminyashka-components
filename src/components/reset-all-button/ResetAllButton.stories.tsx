import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ResetAllButton } from '.';

export default {
  title: 'ResetAllButton',
  component: ResetAllButton,
} as ComponentMeta<typeof ResetAllButton>;

const Template: ComponentStory<typeof ResetAllButton> = (args) => (
  <ResetAllButton {...args} />
);

export const ResetAllButtonDefault = Template.bind({});
// ProductOwnerDataDefault.args = {
//   city: 'Kyev',
//   avatar: image,
//   name: 'Natali',
//   date: '26.02.2023',
//   cityText: 'Місто:',
//   phoneText: 'Телефон:',
//   phone: '097 357 37 77',
//   dateText: 'Дата публікації:',
// };
