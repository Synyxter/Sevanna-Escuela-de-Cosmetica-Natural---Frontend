import React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  /** Applies default internal padding. */
  padded?: boolean;
  /** Switches to the cream light scope. */
  light?: boolean;
  /** Lift + deepen shadow on hover. */
  hover?: boolean;
  style?: React.CSSProperties;
}

/**
 * Generic elevated surface.
 * @startingPoint section="Core" subtitle="Emerald & cream surfaces" viewport="700x260"
 */
export function Card(props: CardProps): JSX.Element;
