import React from 'react';

export interface SelectOption { value: string; label: string; }

export interface SelectProps {
  label?: string;
  /** Array of {value,label} or plain strings. */
  options?: (SelectOption | string)[];
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

/** Dropdown select with gold chevron. */
export function Select(props: SelectProps): JSX.Element;
