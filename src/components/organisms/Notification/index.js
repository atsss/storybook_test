import React from 'react';
import styles from './styles.module.sass';
import Img from '../../atoms/Img';
import Heading from '../../atoms/Heading';
import { InfoTxt } from '../../atoms/Text';
import DeleteButton from '../../molecules/DeleteButton';

const Notification = ({
  program,
  className,
  onClickDelete,
  ...props,
}) => (
  <section className={ [ styles.root, className ].join(' ') } { ...props }>
    <div>
      <Img src={ program.thumbnail } className={ styles.media } width='128' height='72' />
    </div>
    <div className={ styles.body }>
      <Heading level={ 3 } visualLevel={ 6 }>{ program.title }</Heading>
      <InfoTxt size='s'>{ program.channelName }</InfoTxt>
      <DeleteButton onClick={ onClickDelete } className={ styles.del } />
    </div>
  </section>
);

export default Notification
