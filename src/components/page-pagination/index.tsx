import Pagination from 'rc-pagination';

import { ChildrenProps } from 'types';

import * as Icon from '../icon';
import * as Styles from './styles';
import { IPagination } from './types';
import { ButtonNew } from 'components/button-new';

const PagePagination = ({
  total,
  current,
  children,
  onChange,
  pageSize,
  handleShowMore,
}: ChildrenProps<IPagination>) => {
  return (
    <Styles.StylesForPagination>
      <Styles.ChildrenContainer>{children}</Styles.ChildrenContainer>

      <Styles.PaginationContainer>
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

        <div style={{ width: '200px' }}>
          <ButtonNew
            colorType={'blue'}
            text="загрузить еще"
            styleType={'outline'}
            onClick={handleShowMore}
          ></ButtonNew>
        </div>
      </Styles.PaginationContainer>
    </Styles.StylesForPagination>
  );
};

export { PagePagination };
