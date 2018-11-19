import React, { Component } from 'react';
import styles from './styles.module.sass';
import Img from '../../atoms/Img';
import Heading from '../../atoms/Heading';
import { InfoTxt } from '../../atoms/Text';
import DeleteButton from '../../molecules/DeleteButton';

export const NotificationPresenter = ({
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

export class NotificationContainer extends Component {
  constructor() {
    super();
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  render() {
    const { presenter, onClickDelete: propsOnClickDelete, ...props } = this.props;
    const onClickDelete = propsOnClickDelete ? this.onClickDelete : null;
    const presenterProps = { onClickDelete, ...props };
    return presenter(presenterProps);
  }

  onClickDelete(...args) {
    const { onClickDelete, program } = this.props;
    onClickDelete(...args, program);
  }
}

const Notification = props => (
  <NotificationContainer
    presenter={ presenterProps => <NotificationPresenter { ...presenterProps } /> }
    { ...props }
  />
);

export default Notification
