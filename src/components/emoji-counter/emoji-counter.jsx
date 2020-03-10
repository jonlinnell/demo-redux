import React from 'react';
import { useSelector } from 'react-redux';

import { getCount } from '../../store/slices/counter';
import { getEmoji } from '../../store/slices/emoji';

import styles from './emoji-counter.module.scss';

function EmojiCounter() {
  const emoji = useSelector(getEmoji);
  const count = useSelector(getCount);

  return (
    <p className={styles.glyphs}>
      {emoji.repeat(count)}
    </p>
  );
}

export default EmojiCounter;
