import React from 'react';

export interface IconProps {
  /** Lucide icon name, e.g. "sparkles", "leaf", "flame". */
  name?: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  style?: React.CSSProperties;
}

/** Thin-line Lucide icon, tuned to Sevanna's delicate stroke weight. */
export function Icon(props: IconProps): JSX.Element;
