// START HERE
import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './slices/counter';
import emojiSlice from './slices/emoji';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    emoji: emojiSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
