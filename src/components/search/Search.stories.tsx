import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from '../logo';
import { Search } from './index';
import { argTypes } from './arg-types';
import { Header } from './for_presentation/header';

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
    <div className="body" style={{ height: '150vh' }}>
      <Header>
        <Logo onClick={() => alert('You press logo')} />
        <Search
          {...args}
          value={searchValue}
          onChange={(e) =>
            setSearchValue(typeof e === 'string' ? e : e.target.value)
          }
          onClick={() => alert(searchValue)}
        />
      </Header>
      <div
        style={{
          position: 'relative',
          zIndex: 50,
          height: '60vh',
          background: 'linear-gradient(162.46deg, #98D7E3 0%, #5EB8D7 100%)',
        }}
      ></div>
    </div>
  );
};

export const SearchMain: Story = {
  args: {},
  render: (args) => <Template {...args} />,
};
