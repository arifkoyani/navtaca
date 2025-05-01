import { createSlice } from "@reduxjs/toolkit";

const initialStatee = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialStatee,

  reducers: {
    increment(state) {
      state.value++;
    },

    decrement(state) {
      state.value--;
    },
  },
});

console.dir(counterSlice, "this is slice");
export const { increment } = counterSlice.actions;
export const { decrement } = counterSlice.actions;
export default counterSlice.reducer;
