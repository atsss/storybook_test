import React from 'react';
import styles from './styles.module.sass';
import icon from '../../../icons/trash.svg';

export const TrashIcon = ({
  height = 20,
  width = 20,
  className,
  onClick,
  ...props,
}) => {
  if (onClick) className += ` ${ styles.clickable }`;

  return (
    <img
      src={ icon }
      alt=''
      height={ height }
      width={ width }
      className={ className }
      onClick={ onClick }
      { ...props }
    />
  );
};
