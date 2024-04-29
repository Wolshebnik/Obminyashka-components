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
  isShowButtons,
}: ChildrenProps<IPagination>) => {
  return (
    <Styles.StylesForPagination>
      <Styles.ChildrenContainer>{children}</Styles.ChildrenContainer>

      <Styles.PaginationContainer isShowButtons={isShowButtons}>
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
            <Styles.LogoContainer isLoading={isLoading}>
              <Icon.Logo width={48} height={48} />
            </Styles.LogoContainer>
          </Responsive.NotMobile>

          <ButtonNew
            text={text}
            height="50px"
            width="225px"
            onClick={showMore}
            colorType={'blue'}
            disabled={isLoading}
            styleType={'outline'}
          ></ButtonNew>
        </Styles.ButtonContainer>
      </Styles.PaginationContainer>
    </Styles.StylesForPagination>
  );
};

export { PagePagination };
