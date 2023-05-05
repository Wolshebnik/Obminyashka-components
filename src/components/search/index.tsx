import * as Icon from '../icon';
import * as Responsive from '../responsive';
import { useDelayAnimation } from 'hooks/useDelayAnimation';

import * as Styles from './styles';
import { ISearchProps } from './types';
import { SearchInput } from './search-input';

const Search = (props: ISearchProps) => {
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(600);
  return (
    <>
      <Responsive.NotDesktop>
        <Styles.WrapIcon onClick={() => setOpen()}>
          <Icon.SearchNew />
        </Styles.WrapIcon>

        {isOpen && (
          <Styles.WrapDeviceSearch isSearchActive={isAnimation}>
            <SearchInput {...props} />
          </Styles.WrapDeviceSearch>
        )}
      </Responsive.NotDesktop>

      <Responsive.Desktop>
        <SearchInput {...props} />
      </Responsive.Desktop>
    </>
  );
};

export { Search };
