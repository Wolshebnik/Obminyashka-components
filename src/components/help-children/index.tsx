import { Title } from '../title';
import { Button } from 'components/button';

import * as Icon from '../icon';
import * as Styles from './styles';
import { IHelpChildren } from './types';

export const HelpChildren = ({
  translatedTextHelpName,
  translatedTextHelpText,
  translatedTextHelpTitle,
  translatedTextHelpButton,
}: IHelpChildren) => {
  return (
    <Styles.HelpChildren>
      <Styles.TitleWrapper>
        <Title hiddenDots text={`${translatedTextHelpTitle}`} />
      </Styles.TitleWrapper>

      <Styles.HelpChildrenText>
        <Styles.Strong>{`${translatedTextHelpName}`}</Styles.Strong>
        &nbsp;
        {`${translatedTextHelpText}`}
      </Styles.HelpChildrenText>

      <Styles.StylizedBtn>
        <Button icon={<Icon.Heart />} text={`${translatedTextHelpButton}`} />
      </Styles.StylizedBtn>
    </Styles.HelpChildren>
  );
};
export default HelpChildren;
