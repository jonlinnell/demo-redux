import React from 'react';

import styles from './numeric-counter.module.scss';

function NumericCounter({ count }) {
  return <p className={styles.counter}>{count}</p>;
}

export default NumericCounter;
