import React from 'react';
import { useSelector } from 'react-redux';
import { getCount } from '../../store/slices/counter';

import styles from './numeric-counter.module.scss';

function NumericCounter() {
  const count = useSelector(getCount);

  return <p className={styles.counter}>{count}</p>;
}

export default NumericCounter;
