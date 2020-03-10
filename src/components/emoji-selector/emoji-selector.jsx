import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import emojiSlice, { getEmoji } from '../../store/slices/emoji';

import styles from './emoji-selector.module.scss';

function EmojiSelector() {
  const dispatch = useDispatch();

  const value = useSelector(getEmoji);

  function handleChange(event) {
    dispatch(() => dispatch(emojiSlice.actions.set(event.target.value)));
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
