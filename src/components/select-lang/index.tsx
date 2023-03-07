import * as Styles from './styles';
import { ILanguageSelection } from './types';

const LanguageSelection = ({ lang, onClick }: ILanguageSelection) => {
  const languageArray: string[] = ['ua', 'en'];

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
