import React from 'react';

import NumericCounter from '../components/numeric-counter';
import CounterButtons from '../components/counter-buttons';

import styles from './index.module.scss';

function Index() {
  return (
    <div className={styles.index}>
      <h1>Demo O&apos;Clock</h1>

      <div className={styles.counters} style={{ margin: '4rem 0' }}>
        <NumericCounter count={3} />
      </div>

      <div className={styles.row}>
        <CounterButtons />
      </div>
    </div>
  );
}

export default Index;
