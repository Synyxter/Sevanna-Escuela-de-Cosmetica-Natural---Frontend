import React from 'react';

export interface TagProps {
  children?: React.ReactNode;
  /** Highlights with gold foil when true. */
  selected?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/** Selectable filter/category chip. */
export function Tag(props: TagProps): JSX.Element;
