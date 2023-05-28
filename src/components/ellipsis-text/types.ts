import { ReactNode } from 'react';

export type Cursor =
  | 'pointer'
  | 'auto'
  | 'default'
  | 'none'
  | 'context-menu'
  | 'help'
  | 'progress'
  | 'wait'
  | 'cell'
  | 'crosshair'
  | 'text'
  | 'vertical-text'
  | 'alias'
  | 'copy'
  | 'move'
  | 'no-drop'
  | 'not-allowed'
  | 'grab'
  | 'grabbing'
  | 'e-resize'
  | 'n-resize'
  | 'ne-resize'
  | 'nw-resize'
  | 's-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'w-resize'
  | 'ew-resize'
  | 'ns-resize'
  | 'nesw-resize'
  | 'nwse-resize'
  | 'col-resize'
  | 'row-resize'
  | 'all-scroll'
  | 'zoom-in'
  | 'zoom-out'
  | 'url(<string>)'
  | 'zoom-in-out'
  | 'help-rtl';

export type Position = 'right' | 'left' | 'top' | 'bottom';

export interface ITooltipProps {
  gap?: number;
  delay?: number;
  cursor?: Cursor;
  position?: Position;
  children: ReactNode;
  widthTooltip?: number;
  justifyContent?: string;
}

export interface IStyledProps extends ITooltipProps {
  widthEl: number;
  heightEl: number;
}
