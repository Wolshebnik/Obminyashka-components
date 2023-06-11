import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from '.';
import { contacts } from './mock';
import { argTypes } from './arg-types';
import { IFooterProps } from './types';

const meta = {
  title: 'Footer',
  component: Footer,
  argTypes,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

const Template = (args: IFooterProps) => <Footer {...args} />;

export const FooterDefault: Story = {
  args: {
    text: 'Good Deals',
    name: 'Obminyashka',
    tel1: contacts.tel1,
    tel2: contacts.tel2,
    email: contacts.email,
    rules: 'Safe deal rules',
    protect: 'All rights reserved',
    charity: 'Charity organizations',
    questions: 'Frequently asked questions',
  },
  render: (args) => <Template {...args} />,
};

export const FooterOAuth: Story = {
  args: {
    text: 'Good Deals',
    inFooterOAuth: true,
    name: 'Obminyashka',
    tel1: contacts.tel1,
    tel2: contacts.tel2,
    email: contacts.email,
    rules: 'Safe deal rules',
    protect: 'All rights reserved',
    charity: 'Charity organizations',
    questions: 'Frequently asked questions',
  },
  render: (args) => (
    <div
      style={{
        paddingTop: 100,
        background: `linear-gradient(180deg, #A2DDE5 21.44%, #52B2D4 100%)`,
      }}
    >
      <Template {...args} />
    </div>
  ),
};
