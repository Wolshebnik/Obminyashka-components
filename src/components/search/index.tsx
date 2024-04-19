import { useDelayAnimation } from 'hooks';

import * as Icon from '../icon';
import * as Styles from './styles';
import { ISearchProps } from './types';
import * as Responsive from '../responsive';
import { SearchInput } from './search-input';
import { useEffect, useRef } from 'react';

const Search = (props: ISearchProps) => {
  const { isOpen, setOpen, isAnimation } = useDelayAnimation(600);
  const wrapDeviceSearchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node | null;
      if (
        wrapDeviceSearchRef.current &&
        !wrapDeviceSearchRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [wrapDeviceSearchRef]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && isOpen) {
      setOpen(false);
    }
  };

  return (
    <div tabIndex={0} ref={wrapDeviceSearchRef} onKeyDown={handleKeyDown}>
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
    </div>
  );
};

export { Search };
