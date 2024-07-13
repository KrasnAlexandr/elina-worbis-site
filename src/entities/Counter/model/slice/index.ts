'use client';

import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../..';

const initialState: CounterSchema = {
  value: 0,
  secondValue: 10,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setupValue: (state, action) => {
      state.value = action.payload;
    },
  },
  selectors: {
    selectCounter: (state) => state,
    selectSecondValue: (state) => state.secondValue,
  },
});

export const { increment, decrement, setupValue } = counterSlice.actions;

export const { selectCounter, selectSecondValue } = counterSlice.selectors;

export default counterSlice.reducer;
