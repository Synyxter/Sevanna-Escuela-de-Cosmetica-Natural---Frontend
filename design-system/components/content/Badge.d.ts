import React from 'react';

export interface BadgeProps {
  /** Semantic or course-level tone. */
  tone?: 'gold' | 'emerald' | 'basic' | 'intermediate' | 'advanced' | 'success' | 'danger';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Small uppercase status/level pill. */
export function Badge(props: BadgeProps): JSX.Element;
