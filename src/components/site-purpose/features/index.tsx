import * as Styles from './styles';
import { IFeatures } from './types';
import * as Image from 'components/img';

const FeaturesSection = ({ thingsText, regText, tradeText }: IFeatures) => {
  return (
    <Styles.FeaturesSection>
      <Styles.FirstFeatures>
        <Styles.Furniture src={Image.newFurniture} />
        <Styles.FirstBlock>
          <Styles.ThingsText>{thingsText}</Styles.ThingsText>
          <Styles.FirstKeg src={Image.firstKeg} />
        </Styles.FirstBlock>
      </Styles.FirstFeatures>

      <Styles.SecondFeatures>
        <Styles.Laptop src={Image.newLaptop} />
        <Styles.SecondBlock>
          <Styles.RegText>{regText}</Styles.RegText>
          <Styles.SecondKeg src={Image.secondKeg} />
        </Styles.SecondBlock>
      </Styles.SecondFeatures>

      <Styles.ThirdFeatures>
        <Styles.Toys src={Image.newToys} />
        <Styles.ThirdBlock>
          <Styles.TradeText>{tradeText}</Styles.TradeText>
          <Styles.ThirdKeg src={Image.thirdKeg} />
        </Styles.ThirdBlock>
      </Styles.ThirdFeatures>
    </Styles.FeaturesSection>
  );
};

export { FeaturesSection };
