import { useDelayAnimation } from 'hooks';

import * as Icon from '../icon';
import * as Styles from './styles';
import { ISearchProps } from './types';
import * as Responsive from '../responsive';
import { SearchInput } from './search-input';

const Search = (props: ISearchProps) => {
  const { isOpen, setOpen, isAnimation } = useDelayAnimation(600);
  return (
    <>
      <Responsive.NotDesktop>
        <Styles.WrapIcon onClick={() => setOpen(!isOpen)}>
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
