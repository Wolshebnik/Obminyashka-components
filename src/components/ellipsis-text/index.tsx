import { ITooltip } from 'react-tooltip';

import 'react-tooltip/dist/react-tooltip.css';
import { EllipsisDiv, ReactTooltip } from './styles';

const delay = 300;

export const EllipsisText = ({
  id,
  children,
  delayHide = delay,
  delayShow = delay,
  place = 'bottom-start',
}: ITooltip) => {
  return (
    <>
      <EllipsisDiv id={id}>
        <>{children}</>
      </EllipsisDiv>

      <ReactTooltip
        place={place}
        anchorId={id}
        delayShow={delayShow}
        delayHide={delayHide}
      >
        {children}
      </ReactTooltip>
    </>
  );
};
