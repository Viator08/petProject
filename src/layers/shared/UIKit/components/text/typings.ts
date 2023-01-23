import { Event } from 'effector';

export type TextProps = {
  value: string;
  isDisabled?: boolean;
  color?: 'black' | 'primary' | 'danger' | 'white';
  size?: 's' | 'm' | 'l';
  thickness?: 'thin' | 'light' | 'regular' | 'medium' | 'bold';
  link?: boolean;
  event?: Event<any>;
};
