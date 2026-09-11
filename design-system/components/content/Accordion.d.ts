import React from 'react';

export interface AccordionItem { title: string; content: React.ReactNode; }

export interface AccordionProps {
  items?: AccordionItem[];
  /** Index open on mount; -1 for all closed. */
  defaultOpen?: number;
  style?: React.CSSProperties;
}

/** Single-open accordion for temario / FAQ. */
export function Accordion(props: AccordionProps): JSX.Element;
