import { useRef, useEffect, useState } from 'react';

import { ITooltipProps } from './types';
import 'react-tooltip/dist/react-tooltip.css';
import { EllipsisDiv, ReactTooltip } from './styles';

const delay = 300;

export const EllipsisText = ({
  id,
  children,
  width = 200,
  noArrow = true,
  place = 'bottom',
  delayHide = delay,
  delayShow = delay,
  className = 'custom-tooltip',
  ...props
}: ITooltipProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasToolTip, setToolTip] = useState<boolean>(false);

  const deps: (number | undefined)[] = [
    ref?.current?.offsetWidth,
    ref?.current?.scrollWidth,
  ];

  useEffect(() => {
    const offsetWidth: number = ref?.current?.offsetWidth || 0;
    const scrollWidth: number = ref?.current?.scrollWidth || 0;
    const widthRatio: number = scrollWidth / offsetWidth;

    if (widthRatio > 1.0) {
      setToolTip(true);
    } else {
      setToolTip(false);
    }
  }, [deps]);

  return (
    <>
      <EllipsisDiv ref={ref} data-tooltip-id={id}>
        <>{children}</>
      </EllipsisDiv>

      {hasToolTip && (
        <ReactTooltip
          id={id}
          width={width}
          place={place}
          noArrow={noArrow}
          delayShow={delayShow}
          delayHide={delayHide}
          className={className}
          {...props}
        >
          {children}
        </ReactTooltip>
      )}
    </>
  );
};
