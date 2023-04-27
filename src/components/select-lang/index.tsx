import * as Styles from './styles';
import { ILanguageSelection } from './types';

const languageArray: string[] = ['ua', 'en'];

const LanguageSelection = ({ lang, onClick }: ILanguageSelection) => (
  <Styles.LanguagePanel>
    {languageArray.map((el, index) => (
      <>
        {!!index && <span key={index + 1}>/</span>}
        <Styles.Language
          key={el}
          checked={el === lang}
          onClick={el === lang ? undefined : () => onClick({ lang: el })}
        >
          {el === 'en' ? 'eng' : el}
        </Styles.Language>
      </>
    ))}
  </Styles.LanguagePanel>
);

export { LanguageSelection };
