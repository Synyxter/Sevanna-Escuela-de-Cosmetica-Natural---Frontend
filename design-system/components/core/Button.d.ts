import React from 'react';

export interface ButtonProps {
  /** Visual weight of the action. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * Primary call-to-action for Sevanna surfaces.
 * @startingPoint section="Core" subtitle="Gold-foil & emerald actions" viewport="700x220"
 */
export function Button(props: ButtonProps): JSX.Element;
