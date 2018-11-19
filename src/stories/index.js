import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Balloon from '../components/atoms/Balloon'
import Heading from '../components/atoms/Heading'
import Img from '../components/atoms/Img'

storiesOf('Balloon', module)
  .add('2文字', () => <Balloon>次へ</Balloon>)
  .add('4文字', () => <Balloon>削除する</Balloon>)
  .add('絶対座標配置', () => <Balloon style={{ position: 'absolute', top: '200px', left: '200px' }}>削除する</Balloon>);

storiesOf('Img', module)
  .add('デフォルト', () => <Img src='https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/c0.0.320.320/p320x320/13631654_879887108807235_2829615063363236677_n.jpg?_nc_cat=101&_nc_ht=scontent-nrt1-1.xx&oh=28bc5da8151830b3e881a150a7fdf4ac&oe=5C6C3AED' width='128' height='72' />);

storiesOf('Heading', module)
  .add('デフォルト', () => <Heading>見出し</Heading>)
  .add('レベル1', () => <Heading level={ 1 }>見出しレベル1</Heading>)
  .add('レベル1, 見た目2', () => <Heading level={ 1 } visualLevel={ 2 }>見出しレベル1, 見た目2</Heading>);
