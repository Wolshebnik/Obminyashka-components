import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { PresentationHeader } from 'components/shared';

import { Logo } from '../logo';
import { Search } from './index';
import { argTypes } from './arg-types';

const meta = {
  title: 'Search',
  component: Search,
  argTypes,
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof Search>;

const Template = (args: any) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <PresentationHeader>
      <Logo onClick={() => alert('You press logo')} />
      <Search
        {...args}
        value={searchValue}
        onClick={() => alert(searchValue)}
        onChange={(e) =>
          setSearchValue(typeof e === 'string' ? e : e.target.value)
        }
      />
    </PresentationHeader>
  );
};

export const SearchMain: Story = {
  args: {},
  render: (args) => <Template {...args} />,
};
