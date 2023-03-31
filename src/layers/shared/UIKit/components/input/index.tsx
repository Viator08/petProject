import React, { useState } from 'react';
import { size, type } from '../types';
import './styles.scss';

type InputProps = {
  value: string;
  label?: string;
  size?: size;
  type?: type;
};

export const InputText: React.FC<InputProps> = ({
  value,
  label,
  size = 'medium',
  type = 'primary',
}) => {
  const [inputValue, setInputValue] = useState(value);

  return (
    <div className={'inputContainer'}>
      {label && <p className={'label'}>{label}</p>}
      <input type={'text'} value={inputValue} onInput={(e) => setInputValue(e.target.value)} />
    </div>
  );
};
