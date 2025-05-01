import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  temperature: 12,
};

const temperatureSlice = createSlice({
  name: "temperature",
  initialState: initialState,
  reducers: {
    up(state) {
      if (state.temperature >= 10) {
        alert("temperature can't be greater then 10");
        return;
      }
      state.temperature++;
    },
    down(state) {
      if (state.temperature <= 0) {
        alert("temperature can't be less then 0");
        return;
      }
      state.temperature--;
    },
    SetTemperatureByValue(state, actions) {
      state.temperature += actions.payload;
    },
  },
});

export const { up } = temperatureSlice.actions;
export const { SetTemperatureByValue } = temperatureSlice.actions;
export const { down } = temperatureSlice.actions;
export default temperatureSlice.reducer;
