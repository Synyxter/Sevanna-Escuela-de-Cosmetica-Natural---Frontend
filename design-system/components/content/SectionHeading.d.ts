import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  /** Show the gold rule-and-diamond ornament. */
  ornament?: boolean;
  /** Use on cream backgrounds. */
  light?: boolean;
  style?: React.CSSProperties;
}

/** Eyebrow + serif title + gold ornament — the brand's section opener. */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
