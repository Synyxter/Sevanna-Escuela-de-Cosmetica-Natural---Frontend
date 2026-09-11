import React from 'react';

export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  defaultValue?: string;
  /** Error message; also turns the field red. */
  error?: string;
  /** Helper text under the field. */
  hint?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/** Single-line text field with uppercase eyebrow label. */
export function Input(props: InputProps): JSX.Element;
