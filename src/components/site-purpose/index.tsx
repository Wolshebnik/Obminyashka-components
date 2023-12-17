import * as Styles from './styles';

import { ISitePurpose } from './types';
import { FeaturesSection } from './features';
import { BalloonSection } from './balloonSection';
import { FeaturesClouds } from './features/featuresClouds';

const SitePurpose = ({ regText, tradeText, thingsText }: ISitePurpose) => {
  return (
    <>
      <Styles.PresentSection>
        <BalloonSection />

        <FeaturesClouds />

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
