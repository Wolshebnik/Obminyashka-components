import { Responsive } from 'components';

import * as Icon from '../icon';
import * as Styles from './styles';
import { IAboutTheProject } from './types';

const AboutTheProject = ({ text, to }: IAboutTheProject) => {
  return (
    <Styles.AboutTheProjectLink to={to}>
      <Responsive.Desktop>
        <Icon.Puzzle />
      </Responsive.Desktop>

      <Styles.Text>{text}</Styles.Text>
    </Styles.AboutTheProjectLink>
  );
};

export { AboutTheProject };
