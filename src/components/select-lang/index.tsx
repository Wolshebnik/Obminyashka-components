import React from 'react';
import * as Styles from './styles';
import { ILanguageSelection } from './types';

const languageArray: string[] = ['ua', 'en'];

const LanguageSelection = ({ lang, onClick }: ILanguageSelection) => (
  <Styles.LanguagePanel>
    {languageArray.map((el, index) => (
      <React.Fragment key={el + index}>
        {!!index && <span>/</span>}
        <Styles.Language
          key={index}
          checked={el === lang}
          onClick={el === lang ? undefined : () => onClick({ lang: el })}
        >
          {el === 'en' ? 'eng' : el}
        </Styles.Language>
      </React.Fragment>
    ))}
  </Styles.LanguagePanel>
);

export { LanguageSelection };
