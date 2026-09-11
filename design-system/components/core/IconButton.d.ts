import React from 'react';

export interface IconButtonProps {
  /** Lucide icon name. */
  name?: string;
  variant?: 'ghost' | 'gold' | 'filled';
  /** Diameter in px. */
  size?: number;
  /** Accessible label. */
  label?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

/** Circular icon-only button. */
export function IconButton(props: IconButtonProps): JSX.Element;
