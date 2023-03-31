import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import classNames from 'classnames';
import { Event } from 'effector';
import { PulseLoader } from 'react-spinners';
import { size, type } from '../types';

type ButtonProps = {
  label: string;
  type?: type;
  size?: size;
  shape?: 'standard' | 'circle' | 'square';
  disabled?: boolean;
  event?: Event<any>;
  dataId?: string;
  loading?: boolean;
};

export const Button = ({
  label,
  type = 'primary',
  size = 'medium',
  shape = 'standard',
  disabled = false,
  event,
  dataId,
  loading = true,
}: ButtonProps) => {
  return (
    <button
      data-id={dataId}
      disabled={disabled}
      className={classNames(type, size, shape, { isActive: !disabled }, { isDisabled: disabled })}
      onClick={event && (() => event())}
    >
      <PulseLoader
        className={classNames('spinner', { isLoading: loading })}
        size={size === 'large' ? 12 : 7}
      />
      <div className={classNames('label', { isLoading: loading })}>{label}</div>
    </button>
  );
};
