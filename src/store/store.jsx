import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counterSlice/CounterSlice";
import TemperatureReducer from "./temperatureSlice/TemperatureSlice";

const store = configureStore({
  reducer: {
    Counter: CounterReducer,
    Temperature: TemperatureReducer,
  },
});
export default store;
