import React from 'react';

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  style?: React.CSSProperties;
}

/** Checkbox with a gold check mark. */
export function Checkbox(props: CheckboxProps): JSX.Element;
