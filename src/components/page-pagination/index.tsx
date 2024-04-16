import Pagination from 'rc-pagination';

import { ChildrenProps } from 'types';

import * as Icon from '../icon';
import * as Styles from './styles';
import { IPagination } from './types';
import { ButtonNew } from 'components/button-new';

const PagePagination = ({
  text,
  total,
  current,
  children,
  onChange,
  pageSize,
  showMore,
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

        <Styles.ButtonContainer>
          <ButtonNew
            text={text}
            onClick={showMore}
            colorType={'blue'}
            styleType={'outline'}
            height={window.innerWidth < 560 ? '30px' : '50px'}
            width={window.innerWidth < 560 ? '160px' : '225px'}
          ></ButtonNew>
        </Styles.ButtonContainer>
      </Styles.PaginationContainer>
    </Styles.StylesForPagination>
  );
};

export { PagePagination };
