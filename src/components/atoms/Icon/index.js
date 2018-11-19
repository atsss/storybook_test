import React from 'react';
import styles from './styles.module.sass';
import trashIcon from '../../../icons/trash.svg';

export const TrashIconPresenter = ({
  height = 20,
  width = 20,
  ...props,
}) => (
  <img
    src={ trashIcon }
    alt=''
    height={ height }
    width={ width }
    { ...props }
  />
);

export const IconContainer = ({
  presenter,
  className = '',
  onClick,
  ...props,
}) => {
  if (onClick) className += ` ${ styles.clickable }`;
  return presenter({ onClick, className, ...props });
};

export const TrashIcon = props => (
  <IconContainer
    presenter={ presenterProps => <TrashIconPresenter { ...presenterProps } /> }
    { ...props }
  />
);
