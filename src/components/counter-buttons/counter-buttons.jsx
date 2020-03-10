import React from 'react';
import { useDispatch } from 'react-redux';
import counterSlice from '../../store/slices/counter';

import styles from './counter-buttons.module.scss';

function Button({ handleClick, children }) {
  return (
    <button
      onClick={handleClick}
      className={styles.button}
      type="button"
    >
      {children}
    </button>
  );
}

function CounterButtons() {
  const dispatch = useDispatch();

  return (
    <div className={styles.buttonGroup}>
      <Button handleClick={() => dispatch(counterSlice.actions.increment())}>+</Button>
      <Button handleClick={() => dispatch(counterSlice.actions.decrement())}>-</Button>
    </div>
  );
}

export default CounterButtons;
