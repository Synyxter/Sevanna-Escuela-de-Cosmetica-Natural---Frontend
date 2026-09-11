import React from 'react';

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
  style?: React.CSSProperties;
}

/** Toggle switch with a gold track when on. */
export function Switch(props: SwitchProps): JSX.Element;
