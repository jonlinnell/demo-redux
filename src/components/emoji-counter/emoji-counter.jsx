import React from 'react';

import styles from './emoji-counter.module.scss';

function EmojiCounter({ count = 0, emoji = '🤷‍♂️' }) {
  return (
    <p className={styles.glyphs}>
      {emoji.repeat(count)}
    </p>
  );
}

export default EmojiCounter;
