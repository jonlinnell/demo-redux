import React from 'react';
import { render } from 'react-dom';

import 'normalize.css';
import './styles/global.scss';

import PageIndex from './pages/index';

/* eslint-disable-next-line react/jsx-filename-extension */
render(<PageIndex />, document.getElementById('app'));
