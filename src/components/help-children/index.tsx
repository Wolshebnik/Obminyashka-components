import * as Icon from '../icon';
import { Title } from '../title';
import * as Styles from './styles';
import { IHelpChildren } from './types';
import * as Image from 'components/img';

const HelpChildren = ({ text, title, buttonText }: IHelpChildren) => {
  return (
    <Styles.HelpChildren>
      <Styles.TitleWrapper>
        <Title hiddenDots text={title} />
      </Styles.TitleWrapper>

      <Styles.Text>{text}</Styles.Text>

      <Styles.PhotoWrapper>
        <Styles.PhotoOne src={Image.helpChildrenGirl} />
        <Styles.PhotoTwo src={Image.childrenCloth} />
        <Styles.PhotoThree src={Image.childrenToy} />
        <Styles.PhotoFour src={Image.child} />
      </Styles.PhotoWrapper>

      <Styles.StylizedBtn>
        <Styles.Btn icon={<Icon.Heart />} text={buttonText} />
      </Styles.StylizedBtn>
    </Styles.HelpChildren>
  );
};

export { HelpChildren };
