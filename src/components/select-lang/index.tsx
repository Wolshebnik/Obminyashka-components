import * as Styles from './styles';
import { ILanguageSelection } from './types';

const languageArray: string[] = ['ua', 'eng'];

const LanguageSelection = ({
  lang,
  onClick,
  fontSize,
  lineHeight,
}: ILanguageSelection) => {
  return (
    <Styles.LanguagePanel fontSize={fontSize} lineHeight={lineHeight}>
      {languageArray.map((el, index) => (
        <>
          {!!index && <span>/</span>}
          <Styles.Language
            key={el}
            checked={el === lang}
            onClick={el === lang ? undefined : () => onClick({ lang: el })}
          >
            {el}
          </Styles.Language>
        </>
      ))}
    </Styles.LanguagePanel>
  );
};

export { LanguageSelection };
