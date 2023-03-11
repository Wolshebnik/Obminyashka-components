import * as Styles from './styles';
import { ILanguageSelection } from './types';

const languageArray: string[] = ['ua', 'en'];

const LanguageSelection = ({ lang, onClick }: ILanguageSelection) => {
  return (
    <Styles.LanguagePanel>
      {languageArray.map((el) => (
        <Styles.LanguageItem
          key={el}
          checked={el === lang}
          onClick={el === lang ? undefined : onClick}
        >
          {el}
        </Styles.LanguageItem>
      ))}
    </Styles.LanguagePanel>
  );
};

export { LanguageSelection };
