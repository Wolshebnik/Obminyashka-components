import { Responsive } from 'components';

import * as Icon from '../icon';
import * as Styles from './styles';
import { IAboutTheProject } from './types';

const AboutTheProject = ({ text }: IAboutTheProject) => {
  return (
    <Styles.AboutTheProjectLink to="#">
      <Responsive.Desktop>
        <Icon.Puzzle />
      </Responsive.Desktop>

      <Styles.Text>{text}</Styles.Text>
    </Styles.AboutTheProjectLink>
  );
};

export { AboutTheProject };
