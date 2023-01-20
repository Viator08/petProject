import React from 'react';
import { ClipLoader } from 'react-spinners';
import { buttonDesignState, buttonDesignType } from '../typings';

export const ButtonSpinner: React.FC<{
  size: 'medium' | 'large' | 'small';
  loading: boolean;
  type: buttonDesignType;
  state: buttonDesignState;
}> = ({ size, loading, type, state }) => {
  let loaderSize;

  if (size === 'medium') {
    loaderSize = 25;
  } else if (size === 'large') {
    loaderSize = 33;
  } else if (size === 'small') {
    loaderSize = 15;
  }

  let color = 'white';

  if (type === 'primary' && state === 'ghost') {
    color = '#4096ff';
  }
  if (state === 'danger' && type !== 'primary') {
    color = '#d4380d';
  }

  if (type === 'text' && state !== 'danger') {
    color = 'rgba(0, 0, 0, 0.85)';
  }

  return loading ? <ClipLoader color={color} size={loaderSize} /> : null;
};
