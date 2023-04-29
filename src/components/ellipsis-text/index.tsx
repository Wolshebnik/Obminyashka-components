import { useRef, useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

import { ChildrenProps } from 'types';

import { ITooltipProps } from './types';
import 'react-tooltip/dist/react-tooltip.css';
import { EllipsisDiv, WrapTooltip } from './styles';

const delay = 300;

export const EllipsisText = ({
  id,
  children,
  width = 200,
  noArrow = true,
  cursor = 'auto',
  place = 'bottom',
  delayHide = delay,
  delayShow = delay,
  className = 'custom-tooltip',
  ...props
}: ChildrenProps<ITooltipProps>) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasToolTip, setToolTip] = useState<boolean>(false);

  const deps: (number | undefined)[] = [
    ref?.current?.offsetWidth,
    ref?.current?.scrollWidth,
    ref?.current?.offsetHeight,
    ref?.current?.scrollHeight,
  ];

  useEffect(() => {
    const offsetWidth: number = ref?.current?.offsetWidth || 0;
    const offsetHeight: number = ref?.current?.offsetHeight || 0;
    const scrollWidth: number = ref?.current?.scrollWidth || 0;
    const scrollHeight: number = ref?.current?.scrollHeight || 0;
    const widthRatio: number = scrollWidth / offsetWidth;
    const heightRatio: number = scrollHeight / offsetHeight;

    if (widthRatio > 1.0 || heightRatio > 1.5) {
      setToolTip(true);
    } else {
      setToolTip(false);
    }
  }, [deps]);

  return (
    <>
      <EllipsisDiv ref={ref} data-tooltip-id={id} cursor={cursor}>
        <>{children}</>
      </EllipsisDiv>

      {hasToolTip && (
        <WrapTooltip width={width}>
          <Tooltip
            id={id}
            place={place}
            noArrow={noArrow}
            delayShow={delayShow}
            delayHide={delayHide}
            className={className}
            {...props}
          >
            {children}
          </Tooltip>
        </WrapTooltip>
      )}
    </>
  );
};
