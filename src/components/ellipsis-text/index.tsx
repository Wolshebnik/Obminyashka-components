import { ITooltip } from 'react-tooltip';
import { useRef, useEffect, useState } from 'react';

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
  className = 'custom-tooltip',
  ...props
}: ITooltip) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasToolTip, setToolTip] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const deps = [
    ref?.current?.offsetWidth,
    ref?.current?.scrollWidth,
    ref?.current?.offsetHeight,
    ref?.current?.scrollHeight,
  ];

  useEffect(() => {
    const offsetWidth = ref?.current?.offsetWidth || 0;
    const offsetHeight = ref?.current?.offsetHeight || 0;
    const scrollWidth = ref?.current?.scrollWidth || 0;
    const scrollHeight = ref?.current?.scrollHeight || 0;
    const widthRatio = scrollWidth / offsetWidth;
    const heightRatio = scrollHeight / offsetHeight;

    if (widthRatio > 1.0 || heightRatio > 1.5) {
      setToolTip(true);
    } else {
      setToolTip(false);
    }
  }, [deps]);

  const onMouseEnter = () => {
    if (hasToolTip) {
      setOpen(true);
    }
  };

  const onMouseLeave = () => {
    setOpen(false);
  };

  return (
    <>
      <EllipsisDiv
        ref={ref}
        data-tooltip-id={id}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <>{children}</>
      </EllipsisDiv>

      <ReactTooltip
        id={id}
        place={place}
        isOpen={open}
        noArrow={noArrow}
        delayShow={delayShow}
        delayHide={delayHide}
        className={className}
        {...props}
      >
        {children}
      </ReactTooltip>
    </>
  );
};
