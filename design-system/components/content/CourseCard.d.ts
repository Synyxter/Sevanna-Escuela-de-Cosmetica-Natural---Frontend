import React from 'react';

export interface CourseCardProps {
  title?: string;
  /** Level tone for the badge. */
  level?: 'basic' | 'intermediate' | 'advanced';
  levelLabel?: string;
  modality?: string;
  duration?: string;
  price?: string;
  /** Background image URL; falls back to an emerald botanical placeholder. */
  image?: string;
  category?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/**
 * Course catalog card with image well, level badge, meta and price.
 * @startingPoint section="Content" subtitle="Course catalog card" viewport="360x420"
 */
export function CourseCard(props: CourseCardProps): JSX.Element;
