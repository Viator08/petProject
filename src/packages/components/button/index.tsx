import React, { useRef, useState } from 'react';
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
  const ref: React.MutableRefObject<null> = useRef(null);

  const [btnLoading, setButtonLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => setButtonLoading(!btnLoading), 5000);
  //   console.log(ref.current ? ref.current.offsetWidth : 0);
  // }, [btnLoading]);

  let onClickFn: Function;

  state === 'normal'
    ? (onClickFn = () => console.log(`${label} was clicked! Event - ${Event}`))
    : (onClickFn = () => {});

  return (
    <div
      ref={ref}
      key={uniqueId()}
      className={classNames('btn', `size-${size}`, `shape-${shape}`, `${type}`, `${state}`, {
        isActiveAndNotLoading: !isDisabled && !isLoading,
        isActive: !isDisabled,
        isDisabled: isDisabled,
        isDisabledOrLoading: isDisabled || isLoading,
      })}
    >
      <div className={classNames({ ready: !isLoading })}>
        <ButtonSpinner size={size} loading={isLoading} type={type} state={state} />
        {!isLoading && (
          <div className="btn-action" onClick={() => onClickFn()}>
            {label}
          </div>
        )}
      </div>
    </div>
  );
};
