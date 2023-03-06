import * as Styles from './styles';
import { IProductDescription } from './types';

const ProductDescription = ({ title, description }: IProductDescription) => (
  <Styles.Container>
    <Styles.TitleContainer>
      <Styles.Title>{title}</Styles.Title>
    </Styles.TitleContainer>

    <Styles.DescriptionContainer>
      <Styles.DescriptionText>{description}</Styles.DescriptionText>
    </Styles.DescriptionContainer>
  </Styles.Container>
);

export { ProductDescription };
