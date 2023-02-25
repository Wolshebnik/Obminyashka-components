import Pagination from 'rc-pagination';

import { ChildrenProps } from 'types';

import * as Icon from '../icon';
import * as Styles from './styles';
import { IPagination } from './types';

const PagePagination = ({
  total,
  current,
  children,
  onChange,
  pageSize,
}: ChildrenProps<IPagination>) => {
  return (
    <Styles.StylesForPagination>
      <Styles.Container>{children}</Styles.Container>

      <Pagination
        showLessItems
        total={total}
        showTitle={false}
        current={current}
        onChange={onChange}
        pageSize={pageSize}
        nextIcon={<Icon.Next />}
        prevIcon={<Icon.Prev />}
      />
    </Styles.StylesForPagination>
  );
};

export { PagePagination };
