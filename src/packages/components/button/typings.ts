import { HTMLAttributes } from 'react';

export type buttonDesignType = 'primary' | 'secondary' | 'dashed' | 'link' | 'text';
export type buttonDesignState = 'normal' | 'danger' | 'ghost';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  type?: buttonDesignType;
  shape?: 'standard' | 'circle';
  size?: 'medium' | 'large' | 'small';
  state?: buttonDesignState;
  isDisabled?: boolean;
  event?: Event;
  href?: string;
  isLoading?: boolean;
}
