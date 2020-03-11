import React from 'react';

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
  return (
    <div className={styles.buttonGroup}>
      <Button>-</Button>
      <Button>+</Button>
    </div>
  );
}

export default CounterButtons;
