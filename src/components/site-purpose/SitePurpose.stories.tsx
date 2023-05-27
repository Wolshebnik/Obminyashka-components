import type { Meta, StoryObj } from '@storybook/react';

import { SitePurpose } from '.';
// import { argTypes } from './arg-types';

const meta = {
  title: 'SitePurpose',
  component: SitePurpose,
  decorators: [
    // (Story) => (
    //   <div style={{ width: '200px', marginLeft: '20px' }}>
    //     <Story />
    //   </div>
    // ),
  ],
  // argTypes,
} satisfies Meta<typeof SitePurpose>;

export default meta;
type Story = StoryObj<typeof SitePurpose>;

export const MainSitePurpose: Story = {};
