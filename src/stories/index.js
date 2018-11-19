import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Balloon from '../components/atoms/Balloon'

storiesOf('Balloon', module)
  .add('2文字', () => <Balloon>次へ</Balloon>)
  .add('4文字', () => <Balloon>削除する</Balloon>)
  .add('絶対座標配置', () => <Balloon style={{ position: 'absolute', top: '200px', left: '200px' }}>削除する</Balloon>);
