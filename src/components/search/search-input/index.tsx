import * as Styles from './styles';
import * as Icon from '../../icon';
import { ISearchProps } from '../types';

const SearchInput = ({ value, onClick, ...props }: ISearchProps) => {
  // const isNotEmpty = (value as string).length !== 0;
  const isNotEmpty = typeof value === 'string' && value.length !== 0;

  const inputCleaning = () => props.onChange && props.onChange('');

  return (
    <Styles.SearchInputWrapper>
      <Styles.IconWrapper onClick={onClick}>
        <Icon.SearchNew />
      </Styles.IconWrapper>

      <Styles.SearchInput value={value} {...props} />

      {isNotEmpty && (
        <Styles.IconWrapper isNotEmpty onClick={inputCleaning}>
          <Icon.Close />
        </Styles.IconWrapper>
      )}
    </Styles.SearchInputWrapper>
  );
};

export { SearchInput };
