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
    loaderSize = 20;
  } else if (size === 'large') {
    loaderSize = 24;
  } else if (size === 'small') {
    loaderSize = 16;
  }

  let color = 'white';

  if (type === 'primary' && state === 'ghost') {
    color = 'blue';
  } else if (state === 'danger') {
    color = 'white';
  }
  if (type === 'secondary') {
    color = 'gray';
    if (state === 'danger') {
      color = 'red';
    }
  }
  if (type === 'text' && state !== 'danger') {
    color = 'black';
  }

  return loading && type !== 'link' && type !== 'text' ? (
    <ClipLoader color={color} size={loaderSize} />
  ) : null;
};
