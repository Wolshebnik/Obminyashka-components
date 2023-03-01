import * as Styles from './styles';
import { ILanguageSelection } from './types';

const LanguageSelection = ({ languageArray, onClick }: ILanguageSelection) => {
  return (
    <Styles.LanguagePanel>
      {languageArray.map((option) => (
        <Styles.LanguageItem
          key={option.value}
          checked={option.checked}
          onClick={onClick}
        >
          {option.value}
        </Styles.LanguageItem>
      ))}
    </Styles.LanguagePanel>
  );
};

export { LanguageSelection };
