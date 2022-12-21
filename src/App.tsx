import { useState } from "react";
import { bubbleSort } from "./algos";

function generateArray() {
  let values = new Set<number>();
  let array = new Array<number>(50);
  for (let i = 0; i < array.length; i++) {
    let newValue = Math.floor(Math.random() * (100 - 25) + 25);
    while (values.has(newValue)) {
      newValue = Math.floor(Math.random() * (100 - 25) + 25);
    }
    values.add(newValue);
    array[i] = newValue;
  }
  return array;
}

export default function App() {
  let [array, setArray] = useState(generateArray());
  let [running, setRunning] = useState(false);

  return (
    <>
      <button
        className="border-1 p-2"
        onClick={() => {
          setRunning(true);
          bubbleSort(array, setArray, setRunning);
        }}
      >
        Sort
      </button>
      <button
        className="border-1 p-2"
        onClick={() => {
          setArray(generateArray());
        }}
        disabled={running}
      >
        Reset
      </button>
      <div className="flex">
        {array.map((value) => (
          <div
            className="m-2 w-[25px] bg-gray-400"
            style={{ height: `${value * 5}px` }}
            key={value}
          ></div>
        ))}
      </div>
    </>
  );
}
