import { useRef, useEffect, useState } from 'react';
import { useDelay } from '../../hooks/useDelayTooltip';

import { ChildrenProps } from 'types';

import * as Styles from './styles';
import { ITooltipProps } from './types';

export const EllipsisText = ({
  children,
  cursor = 'auto',
  widthTooltip = 200,
  position = 'bottom',
  justifyContent = 'center',
}: ChildrenProps<ITooltipProps>) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useDelay(500);
  const [widthEl, setWidthEl] = useState<number | null>(null);
  const [heightEl, setHeightEl] = useState<number | null>(null);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

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
      setIsTooltipVisible(true);
    } else {
      setIsTooltipVisible(false);
    }

    if (ref?.current) {
      const { height, width } = ref.current.getBoundingClientRect();

      setHeightEl(height || 0);
      setWidthEl(width || 0);
    }
  }, [deps]);

  const handleMouseEnter = () => {
    if (isTooltipVisible) {
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <Styles.Wrapper justifyContent={justifyContent}>
      <Styles.EllipsisText
        ref={ref}
        cursor={cursor}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Styles.EllipsisText>

      {open && (
        <Styles.Tooltip
          position={position}
          widthEl={widthEl || 0}
          heightEl={heightEl || 0}
          widthTooltip={widthTooltip}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </Styles.Tooltip>
      )}
    </Styles.Wrapper>
  );
};
