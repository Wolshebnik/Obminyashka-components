import { Title } from '../title';
import { Button } from 'components/button';

import * as Icon from '../icon';
import * as Styles from './styles';
import { IHelpChildren } from './types';

const HelpChildren = ({ name, text, title, buttonText }: IHelpChildren) => {
  return (
    <Styles.HelpChildren>
      <Styles.TitleWrapper>
        <Title hiddenDots text={title} />
      </Styles.TitleWrapper>

      <Styles.Text>
        <Styles.Strong>{name}</Styles.Strong>
        &nbsp;
        {text}
      </Styles.Text>

      <Styles.StylizedBtn>
        <Button icon={<Icon.Heart />} text={buttonText} />
      </Styles.StylizedBtn>
    </Styles.HelpChildren>
  );
};

export { HelpChildren };
