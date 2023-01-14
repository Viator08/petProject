import React from 'react';
import './styles.scss';
import { ButtonProps } from './typings';

export const Button: React.FC<ButtonProps> = ({
  label = 'Button',
  type = 'primary',
  shape = 'standard',
  size = 'medium',
  state = 'normal',
  danger = false,
  ghost = false,
}: ButtonProps) => (
  <div className="buttonTest">
    <div className="text">{label}</div>
  </div>
);
