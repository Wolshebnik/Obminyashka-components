import { useNavigate } from 'react-router-dom';

import * as Styles from './styles';
import { IFeatures } from './types';
import * as Image from 'components/img';

const FeaturesSection = ({
  regText,
  tradeText,
  thingsText,
  regTextTwo,
  regTextLink,
  regTextRoute,
  tradeTextLink,
  tradeTextRoute,
  thingsTextLink,
  thingsTextRoute,
}: IFeatures) => {
  const navigate = useNavigate();

  return (
    <Styles.FeaturesSection>
      <Styles.FeaturesWrapper>
        <Styles.ColumnOne>
          <Styles.Furniture src={Image.newFurniture} />

          <Styles.FirstBlock>
            <Styles.ThingsText>
              <span>{thingsText}</span>
              <Styles.ThingsTextLink to={thingsTextRoute}>
                {thingsTextLink}
              </Styles.ThingsTextLink>
            </Styles.ThingsText>
            <Styles.FirstKeg src={Image.firstKeg} />
          </Styles.FirstBlock>
        </Styles.ColumnOne>

        <Styles.ColumnTwo>
          <Styles.Laptop src={Image.newLaptop} />

          <Styles.SecondBlock>
            <Styles.RegText>
              <span>{regText}</span>
              <Styles.RegTextLink onClick={() => navigate(regTextRoute)}>
                {regTextLink}
              </Styles.RegTextLink>
              <span>{regTextTwo}</span>
            </Styles.RegText>
            <Styles.SecondKeg src={Image.secondKeg} />
          </Styles.SecondBlock>
        </Styles.ColumnTwo>

        <Styles.ColumnTree>
          <Styles.Toys src={Image.newToys} />

          <Styles.ThirdBlock>
            <Styles.TradeText>
              <Styles.TradeTextLink onClick={() => navigate(tradeTextRoute)}>
                {tradeTextLink}
              </Styles.TradeTextLink>
              <span>{tradeText}</span>
            </Styles.TradeText>
            <Styles.ThirdKeg src={Image.thirdKeg} />
          </Styles.ThirdBlock>
        </Styles.ColumnTree>
      </Styles.FeaturesWrapper>
    </Styles.FeaturesSection>
  );
};

export { FeaturesSection };
