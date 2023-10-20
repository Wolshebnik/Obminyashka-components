import * as Styles from './styles';

import { ISitePurpose } from './types';
import { Clouds } from './clouds';
import { FeaturesSection } from './features';
import { BalloonSection } from './balloonSection';

const SitePurpose = ({ regText, tradeText, thingsText }: ISitePurpose) => {
  return (
    <>
      <Styles.PresentSection>
        <BalloonSection />
        <Clouds />

        <FeaturesSection
          regText={regText}
          tradeText={tradeText}
          thingsText={thingsText}
        />
      </Styles.PresentSection>
    </>
  );
};

export { SitePurpose };
