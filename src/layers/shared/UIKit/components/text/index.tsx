import React, { MouseEventHandler, useState } from 'react';
import classNames from 'classnames';
import './styles.scss';
import { TextProps } from './typings';

export const Text: React.FC<TextProps> = ({
  value,
  size = 'm',
  thickness = 'regular',
  color = 'black',
  link = false,
  isDisabled = false,
  event,
}: TextProps) => {
  const [isClicked, setIsClicked] = useState(false);

  let sizeStyle;
  switch (size) {
    case 's':
      sizeStyle = '12px';
      break;
    case 'm':
      sizeStyle = '14px';
      break;
    case 'l':
      sizeStyle = '16px';
      break;
  }

  let thicknessStyle;
  switch (thickness) {
    case 'thin':
      thicknessStyle = 100;
      break;
    case 'light':
      thicknessStyle = 300;
      break;
    case 'regular':
      thicknessStyle = 400;
      break;
    case 'medium':
      thicknessStyle = 500;
      break;
    case 'bold':
      thicknessStyle = 700;
      break;
  }

  return (
    <div
      className={classNames(
        isDisabled,
        `color-${color}`,
        isClicked,
        { isNotClicked: !isClicked },
        link,
      )}
      style={{ fontWeight: thicknessStyle, fontSize: sizeStyle }}
      onClick={(e) => {
        e.preventDefault();
        setIsClicked(true);
        if (event && !isDisabled) {
          event as () => void;
        }
      }}
    >
      {value}
    </div>
  );
};
