import * as Styles from './styles';
// import { Rainbow } from './balloonSection/rainbow';
import { FeaturesSection } from './features';
import { ISitePurpose } from './types';
// import { MoveCloud } from './balloonSection/moveCloud';
import { BalloonSection } from './balloonSection';

const SitePurpose = ({ regText, tradeText, thingsText }: ISitePurpose) => {
  return (
    <>
      <Styles.PresentSection>
        <BalloonSection></BalloonSection>

        {/* <div style={{ paddingTop: 200 }}> */}
        <FeaturesSection
          regText={regText}
          tradeText={tradeText}
          thingsText={thingsText}
        />
        {/* </div> */}
      </Styles.PresentSection>
    </>
  );
};

export { SitePurpose };
