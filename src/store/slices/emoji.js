import { createSlice } from '@reduxjs/toolkit';

const emoji = createSlice({
  name: 'emoji',
  initialState: '🥦',
  reducers: {
    set: (state, action) => action.payload,
  },
});

export const getEmoji = (state) => state.emoji;

export default emoji;
