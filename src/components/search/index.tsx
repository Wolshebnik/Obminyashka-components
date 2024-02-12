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
      <Responsive.NotDesktopMD>
        <Styles.WrapIcon onClick={() => setOpen(!isOpen)}>
          <Icon.SearchNew />
        </Styles.WrapIcon>

        {isOpen && (
          <Styles.WrapDeviceSearch isSearchActive={isAnimation}>
            <SearchInput {...props} />
            <Styles.CloseBtn>
              <Responsive.Desktop>
                <Icon.Close onClick={() => setOpen(!isOpen)} />
              </Responsive.Desktop>
            </Styles.CloseBtn>
          </Styles.WrapDeviceSearch>
        )}
      </Responsive.NotDesktopMD>

      <Responsive.DesktopMD>
        <SearchInput {...props} />
      </Responsive.DesktopMD>
    </>
  );
};

export { Search };
