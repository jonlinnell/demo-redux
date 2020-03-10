import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';

import NumericCounter from '../components/numeric-counter';
import CounterButtons from '../components/counter-buttons';
import EmojiCounter from '../components/emoji-counter';
import EmojiSelector from '../components/emoji-selector';

import styles from './index.module.scss';

function Index() {
  return (
    <div className={styles.index}>
      <Provider store={store}>
        <h1>Demo Page</h1>
        <p>Hello Meetup!</p>

        <div className={styles.row} style={{ margin: '4rem 0' }}>
          <NumericCounter />
          <EmojiCounter />
        </div>

        <div className={styles.row}>
          <CounterButtons />
          <EmojiSelector />
        </div>
      </Provider>
    </div>
  );
}

export default Index;
