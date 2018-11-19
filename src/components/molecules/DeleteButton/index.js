import React from 'react';
import styles from './styles.module.sass';
import { TrashIcon } from '../../atoms/Icon';
import Balloon from '../../atoms/Balloon';

const DeleteButton = ({ className, onClick, ...props }) => (
  <span className={ [styles.root, className ].join(' ') } { ...props }>
    <TrashIcon onClick={ onClick } />
    <Balloon>削除する</Balloon>
  </span>
);

export default DeleteButton;
