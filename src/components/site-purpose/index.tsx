import * as Styles from './styles';

import { ISitePurpose } from './types';
import { FeaturesSection } from './features';
import { BalloonSection } from './balloonSection';
import { FeaturesClouds } from './features/featuresClouds';
import { Responsive } from 'components';

const SitePurpose = ({
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
}: ISitePurpose) => {
  return (
    <>
      <Styles.PresentSection>
        <Responsive.Desktop>
          <BalloonSection />
        </Responsive.Desktop>

        <FeaturesClouds />

        <FeaturesSection
          regText={regText}
          tradeText={tradeText}
          regTextTwo={regTextTwo}
          thingsText={thingsText}
          regTextLink={regTextLink}
          regTextRoute={regTextRoute}
          tradeTextLink={tradeTextLink}
          tradeTextRoute={tradeTextRoute}
          thingsTextLink={thingsTextLink}
          thingsTextRoute={thingsTextRoute}
        />
      </Styles.PresentSection>
    </>
  );
};

export { SitePurpose };
