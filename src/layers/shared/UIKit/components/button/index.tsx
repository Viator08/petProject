import React from 'react';
import './styles.scss';
import { ButtonProps } from './typings';
import { uniqueId } from 'lodash';
import { ButtonSpinner } from './spinner';
import classNames from 'classnames';

export const Button: React.FC<ButtonProps> = ({
  label,
  type = 'primary',
  shape = 'standard',
  size = 'medium',
  isLoading = false,
  state = 'normal',
  isDisabled = false,
}: ButtonProps) => {
  let onClickFn: Function;

  //TODO: убрать на нормальный Event
  state === 'normal'
    ? (onClickFn = () => console.log(`${label} was clicked! Event - ${Event}`))
    : (onClickFn = () => {});

  return (
    <div
      key={uniqueId()}
      className={classNames('btn', `size-${size}`, `shape-${shape}`, `${type}`, `${state}`, {
        isActiveAndNotLoading: !isDisabled && !isLoading,
        isActive: !isDisabled,
        isDisabled: isDisabled,
        isDisabledOrLoading: isDisabled || isLoading,
        isLoading: isLoading,
      })}
      onClick={() => onClickFn()}
    >
      <ButtonSpinner size={size} loading={isLoading} type={type} state={state} />
      <div className="btn-text">{label}</div>
    </div>
  );
};
