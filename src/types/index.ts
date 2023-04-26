import { PropsWithChildren } from 'react';

export type ChildrenProps<T = unknown> = PropsWithChildren<T>;

export type InputChangeEventType = React.ChangeEvent<HTMLInputElement>;
export type LabelDragEventType = React.DragEvent<HTMLLabelElement>;
export type DivDragEventType = React.DragEvent<HTMLDivElement>;
