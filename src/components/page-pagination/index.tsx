import Pagination from 'rc-pagination';

import { ChildrenProps } from 'types';

import * as Icon from '../icon';
import * as Styles from './styles';
import { IPagination } from './types';
import { ButtonNew } from 'components/button-new';
import { Responsive } from 'components';

const PagePagination = ({
  text,
  total,
  current,
  children,
  onChange,
  pageSize,
  showMore,
  isLoading,
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
          <Responsive.NotMobile>
            <Styles.Logo isLoading={isLoading} />
          </Responsive.NotMobile>

          <ButtonNew
            text={text}
            onClick={showMore}
            colorType={'blue'}
            disabled={isLoading}
            styleType={'outline'}
            height={window.innerWidth < 768 ? '30px' : '50px'}
            width={window.innerWidth < 768 ? '160px' : '225px'}
          ></ButtonNew>
        </Styles.ButtonContainer>
      </Styles.PaginationContainer>
    </Styles.StylesForPagination>
  );
};

export { PagePagination };
