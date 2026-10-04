import type {
  ButtonHTMLAttributes,
  CSSProperties,
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
} from "react";

/** Kebab-case Lucide icon name, e.g. "flower-2", "map-pin", "arrow-right". */
export type IconName = string;

export interface IconProps {
  name?: IconName;
  size?: number;
  strokeWidth?: number;
  color?: string;
  style?: CSSProperties;
}
export function Icon(props: IconProps): ReactNode;

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style"> {
  variant?: "primary" | "secondary" | "ghost" | "solid";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children?: ReactNode;
  style?: CSSProperties;
}
export function Button(props: ButtonProps): ReactNode;

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "name"> {
  name?: IconName;
  variant?: "ghost" | "gold" | "filled";
  size?: number;
  label?: string;
}
export function IconButton(props: IconButtonProps): ReactNode;

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "style"> {
  label?: string;
  error?: string;
  hint?: string;
  style?: CSSProperties;
}
export function Input(props: InputProps): ReactNode;

export type SelectOption = string | { value: string; label: string };
export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "style"> {
  label?: string;
  options?: SelectOption[];
  style?: CSSProperties;
}
export function Select(props: SelectProps): ReactNode;

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  style?: CSSProperties;
}
export function Checkbox(props: CheckboxProps): ReactNode;

export interface SwitchProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}
export function Switch(props: SwitchProps): ReactNode;

export type BadgeTone =
  | "gold"
  | "emerald"
  | "basic"
  | "intermediate"
  | "advanced"
  | "success"
  | "danger"
  | string;
export interface BadgeProps {
  tone?: BadgeTone;
  children?: ReactNode;
  className?: string;
}
export function Badge(props: BadgeProps): ReactNode;

export interface TagProps {
  children?: ReactNode;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}
export function Tag(props: TagProps): ReactNode;

export interface CardProps {
  children?: ReactNode;
  padded?: boolean;
  light?: boolean;
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}
export function Card(props: CardProps): ReactNode;

export interface CourseCardProps {
  title?: string;
  level?: BadgeTone;
  levelLabel?: string;
  modality?: string;
  duration?: string;
  price?: string;
  image?: string;
  category?: string;
  onClick?: () => void;
  className?: string;
}
export function CourseCard(props: CourseCardProps): ReactNode;

export interface SectionHeadingProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  align?: "center" | "left";
  ornament?: boolean;
  light?: boolean;
  className?: string;
}
export function SectionHeading(props: SectionHeadingProps): ReactNode;

export interface AccordionItem {
  title: string;
  content: ReactNode;
}
export interface AccordionProps {
  items?: AccordionItem[];
  defaultOpen?: number;
  className?: string;
}
export function Accordion(props: AccordionProps): ReactNode;
