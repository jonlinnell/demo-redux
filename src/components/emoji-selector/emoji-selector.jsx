import React, { useState } from 'react';

import styles from './emoji-selector.module.scss';

function EmojiSelector() {
  const [value, setValue] = useState('🚀');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={styles.inputGroup}>
      <input
        value={value}
        type="input"
        className={styles.input}
        onChange={handleChange}
      />
      <button
        type="button"
        className={styles.selectButton}
      >
        OK
      </button>
    </div>
  );
}

export default EmojiSelector;
