import { Responsive } from 'components';

import * as Styles from './styles';
import { Rainbow } from './rainbow';
import { Features } from './features';
import { ISitePurpose } from './types';
import { MoveCloud } from './moveCloud';

const SitePurpose = ({ regText, tradeText, thingsText }: ISitePurpose) => {
  return (
    <>
      <Styles.PresentSection>
        <Responsive.NotMobile>
          <Styles.Content>
            <Rainbow />
            <MoveCloud />
          </Styles.Content>
        </Responsive.NotMobile>
      </Styles.PresentSection>

      <div style={{ paddingTop: 2000 }}>
        <Features
          regText={regText}
          tradeText={tradeText}
          thingsText={thingsText}
        />
      </div>
    </>
  );
};

export { SitePurpose };
