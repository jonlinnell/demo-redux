import React, { useState } from 'react';

import styles from './emoji-selector.module.scss';

function EmojiSelector() {
  const [value, setValue] = useState('🚀');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <input
      value={value}
      type="input"
      className={styles.input}
      onChange={handleChange}
    />
  );
}

export default EmojiSelector;
