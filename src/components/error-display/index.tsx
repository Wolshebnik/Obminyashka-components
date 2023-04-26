import { IError } from './types';
import * as Styles from './styles';

const ErrorDisplay = ({ error }: IError) => (
  <> {error && <Styles.StyledError>{error}</Styles.StyledError>}</>
);

export { ErrorDisplay };
