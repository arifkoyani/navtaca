import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./store/counterSlice/CounterSlice.jsx";
import { decrement } from "./store/counterSlice/CounterSlice.jsx";
import { up } from "./store/temperatureSlice/TemperatureSlice.js";
import { down } from "./store/temperatureSlice/TemperatureSlice.js";
import { SetTemperatureByValue } from "./store/temperatureSlice/TemperatureSlice.js";

const App = () => {
  const { value } = useSelector((state) => {
    return state.Counter;
  });

  const { temperature } = useSelector((state) => {
    return state.Temperature;
  });

  const dispatch = useDispatch();
  const myref = useRef(null);

  function handleIncrementByValue() {
    dispatch(SetTemperatureByValue(parseInt(myref.current.value)));
    myref.current.value = "";
  }

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "black",
        justifyContent: "space-between",
        alignItems: "start",
        color: "black",
        height: "200px",
        padding: "10px",
        background: "#eee",
      }}
    >
      <button
        style={{
          background: "black",
          padding: "5px 20px",
          color: "white",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        style={{
          background: "black",
          padding: "5px 20px",
          color: "white",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={() => dispatch(down())}
      >
        Down
      </button>
      <span>
        Counter :{value}
        <hr /> <br /> Temperature : {temperature}
        <hr />
      </span>
      <button
        style={{
          background: "black",
          padding: "5px 20px",
          color: "white",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        style={{
          background: "black",
          padding: "5px 20px",
          color: "white",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={() => dispatch(up())}
      >
        Up
      </button>

      <input
        style={{
          display: "flex",
          backgroundColor: "black",
          justifyContent: "space-between",
          alignItems: "start",
          color: "green",
          border: "2px solid blue",
          borderRadius: "20px",
          padding: "10px",
          background: "#eee",
        }}
        type="number"
        ref={myref}
      />
      <button
        style={{
          background: "black",
          padding: "5px 20px",
          color: "white",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={handleIncrementByValue}
      >
        Set-Temperature
      </button>
    </div>
  );
};

export default App;
