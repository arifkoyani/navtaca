import { createSlice } from "@reduxjs/toolkit";

const initialStatee = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialStatee,

  reducers: {
    increment(state) {
      if (state.value >= 10) {
        alert("cant greater then 10");
        return;
      }
      state.value++;
    },

    decrement(state) {
      if (state.value <= 0) {
        alert("cant less then 0");
        return;
      }

      state.value--;
    },
  },
});

console.dir(counterSlice, "this is slice");
export const { increment } = counterSlice.actions;
export const { decrement } = counterSlice.actions;
export default counterSlice.reducer;
