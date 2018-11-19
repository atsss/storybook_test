import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// utils
import { withStyle } from '../components/utils/decorator.js';

// atoms
import Balloon from '../components/atoms/Balloon'
import Heading, { HeadingUnderlined } from '../components/atoms/Heading'
import { TrashIcon, SettingIcon, SearchIcon } from '../components/atoms/Icon'
import Img from '../components/atoms/Img'
import Txt, { InfoTxt, WarningTxt } from '../components/atoms/Text'

// molecules
import DeleteButton from '../components/molecules/DeleteButton'

// organisms
import Notification from '../components/organisms/Notification';

// atoms
storiesOf('Balloon', module)
  .add('2文字', () => <Balloon>次へ</Balloon>)
  .add('4文字', () => <Balloon>削除する</Balloon>)
  .add('絶対座標配置', () => <Balloon style={{ position: 'absolute', top: '200px', left: '200px' }}>削除する</Balloon>);

storiesOf('Icon', module)
  .add('TrashIcon', () => <TrashIcon />)
  .add('クリッカブル', () => <TrashIcon onClick={ action('アイコンがクリックされました') } />)
  .add('SettingIcon', () => <SettingIcon />)
  .add('SearchIcon', () => <SearchIcon />);

storiesOf('Img', module)
  .add('デフォルト', () => <Img src='https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/c0.0.320.320/p320x320/13631654_879887108807235_2829615063363236677_n.jpg?_nc_cat=101&_nc_ht=scontent-nrt1-1.xx&oh=28bc5da8151830b3e881a150a7fdf4ac&oe=5C6C3AED' width='128' height='72' />);

storiesOf('Heading', module)
  .add('デフォルト', () => <Heading>見出し</Heading>)
  .add('レベル1', () => <Heading level={ 1 }>見出しレベル1</Heading>)
  .add('レベル1, 見た目2', () => <Heading level={ 1 } visualLevel={ 2 }>見出しレベル1, 見た目2</Heading>)
  .add('下線付き', () => <HeadingUnderlined>下線付き, 見出し</HeadingUnderlined>)
  .add('下線付き, レベル1', () => <HeadingUnderlined level={ 1 }>下線付き, 見出しレベル1</HeadingUnderlined>)
  .add('下線付き, レベル1, 見た目2', () => <HeadingUnderlined level={ 1 } visualLevel={ 2 }>下線付き, 見出しレベル1, 見た目2</HeadingUnderlined>);

storiesOf('Text', module)
  .add('デフォルト - S', () => <Txt size='s'>デフォルト - S</Txt>)
  .add('情報テキスト - M', () => <InfoTxt>情報テキスト - M</InfoTxt>)
  .add('警告テキスト - L', () => <WarningTxt size='l'>警告テキスト - L</WarningTxt>);

// molecules
storiesOf('DeleteButton', module)
  .add('デフォルト', () => withStyle({ margin: '50px' })(
    <DeleteButton onClick= { action('削除ボタンがクリックされました') } />
  ));

// organisms
const notification = {
  id: 0,
  thumbnail: 'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/c0.0.320.320/p320x320/13631654_879887108807235_2829615063363236677_n.jpg?_nc_cat=101&_nc_ht=scontent-nrt1-1.xx&oh=28bc5da8151830b3e881a150a7fdf4ac&oe=5C6C3AED',
  title: 'コンポーネント指向で hogehoge',
  channelName: 'UI チャネル',
};

storiesOf('Notification', module)
  .add('デフォルト', () => <Notification program={ notification } onClickDelete={ action('削除ボタンがクリックされました') } />
    );
