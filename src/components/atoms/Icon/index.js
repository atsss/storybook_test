import React from 'react';
import styles from './styles.module.sass';
import trashIcon from '../../../icons/trash.svg';
import searchIcon from '../../../icons/search.svg';
import settingIcon from '../../../icons/setting.svg';

export const IconPresenter = ({
  iconName,
  height = 20,
  width = 20,
  ...props,
}) => (
  <img
    src={ iconName }
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

export const iconFactory = iconName => props => (
  <IconContainer
    presenter={ presenterProps => <IconPresenter { ...presenterProps } /> }
    { ...{ iconName, ...props } }
  />
);

export const TrashIcon = iconFactory(trashIcon)
export const SettingIcon = iconFactory(settingIcon)
export const SearchIcon = iconFactory(searchIcon)
