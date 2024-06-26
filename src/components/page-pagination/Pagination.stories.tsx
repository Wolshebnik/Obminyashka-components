import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { allData } from './mock';
import { PagePagination } from '.';
import { argTypes } from './arg-types';

const meta: Meta<typeof PagePagination> = {
  title: 'PagePagination',
  component: PagePagination,
  argTypes,
};

export default meta;
type Story = StoryObj<typeof PagePagination>;

export const Pagination: Story = {
  render: (args) => {
    const countPerPage = 1;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [collection, setCollection] = useState(
      Object.assign(allData.slice(0, countPerPage))
    );

    const updatePage = (page: number = 1) => {
      setCurrentPage(page);
      const to = countPerPage * page;
      const from = to - countPerPage;
      setCollection(Object.assign(allData.slice(from, to)));
    };

    return (
      <PagePagination
        {...args}
        text="загрузить еще"
        onChange={updatePage}
        current={currentPage}
        total={allData.length}
        pageSize={countPerPage}
      >
        {collection.map((item: { id: number; title: string }) => (
          <span key={item.id}>{item.title}</span>
        ))}
      </PagePagination>
    );
  },
};
