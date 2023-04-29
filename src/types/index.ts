import { PropsWithChildren } from 'react';
import { ArgTypes } from '@storybook/react';

export type ChildrenProps<T = unknown> = PropsWithChildren<T>;

export type InputChangeEventType = React.ChangeEvent<HTMLInputElement>;
export type LabelDragEventType = React.DragEvent<HTMLLabelElement>;
export type DivDragEventType = React.DragEvent<HTMLDivElement>;

export type IArgTypes<T = unknown> = Partial<ArgTypes<T>>;
