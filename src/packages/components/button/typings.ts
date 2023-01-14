export interface ButtonProps {
  label: string;
  type: 'primary' | 'secondary' | 'dashed' | 'link' | 'text';
  shape: 'standard' | 'circle' | 'square';
  size: 'medium' | 'large' | 'small';
  state: 'normal' | 'hover/pressed' | 'active' | 'animating' | 'disabled';
  danger: boolean;
  ghost: boolean;
  event?: Event;
  href?: string;
  loading?: boolean;
  show?: boolean;
}
