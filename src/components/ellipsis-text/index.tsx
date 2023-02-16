import { ITooltip } from 'react-tooltip';

import 'react-tooltip/dist/react-tooltip.css';
import { EllipsisDiv, ReactTooltip } from './styles';

const delay = 300;

export const EllipsisText = ({
  id,
  children,
  noArrow = true,
  place = 'bottom',
  delayHide = delay,
  delayShow = delay,
}: ITooltip) => {
  return (
    <>
      <EllipsisDiv id={id}>
        <>{children}</>
      </EllipsisDiv>

      <ReactTooltip
        place={place}
        anchorId={id}
        noArrow={noArrow}
        delayShow={delayShow}
        delayHide={delayHide}
      >
        {children}
      </ReactTooltip>
    </>
  );
};
