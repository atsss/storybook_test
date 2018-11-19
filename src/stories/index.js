import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Balloon from '../components/atoms/Balloon'

storiesOf('Balloon', module).add('デフォルト', () => <Balloon />);
