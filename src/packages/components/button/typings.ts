export interface ButtonProps {
  label: string;
  type: 'Primary' | 'Secondary' | 'Dashed' | 'Link' | 'Text';
  size: 'Medium' | 'Large' | 'Small';
  condition: 'Hover/Pressed' | 'Active' | 'Animating' | 'Disabled';
  template: 'Standard' | 'Dangerous' | 'Circle' | 'Square' | 'Ghost';
  event?: Event;
  href?: string;
  loading?: boolean;
  show?: boolean;
}
