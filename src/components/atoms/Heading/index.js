import React from 'react';
import styles from './styles.module.sass';

export const Heading1 = ({ children, className, ...props }) => <h1 className={ [ styles.h1, className ].join(' ') } { ...props }>{ children }</h1>;
