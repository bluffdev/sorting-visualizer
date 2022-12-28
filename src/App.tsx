import React, { useState } from "react";
import {
  bubbleSort,
  block,
  insertionSort,
  selectionSort,
  quickSort,
} from "./algos";

function generateArray() {
  let values = new Set<number>();
  let array = new Array<block>(50);
  for (let i = 0; i < array.length; i++) {
    let newValue = Math.floor(Math.random() * (100 - 25) + 25);
    while (values.has(newValue)) {
      newValue = Math.floor(Math.random() * (100 - 25) + 25);
    }
    values.add(newValue);
    array[i] = {
      size: newValue,
      color: "bg-gray-400",
      key: i,
    };
  }
  return array;
}

export default function App() {
  let [array, setArray] = useState(generateArray());
  let [running, setRunning] = useState(false);
  let [selected, setSelected] = useState("");

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-2 text-3xl">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="flex text-sm lg:flex-grow items-center justify-center">
            <label className=" text-white py-2 px-6 ml-2">Size</label>
            <input type="range" min="0" max="100" />
            <label className=" text-white py-2 px-6">Speed</label>
            <input type="range" min="0" max="100" />
            <select
              className="inline-block text-white bg-gray-800 border-0 py-2 px-6 mx-3 focus:outline-none hover:bg-gray-900 rounded-lg"
              value={selected}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                setSelected(event.target.value);
              }}
            >
              <option value="none">Choose Algorithm</option>
              <option value="bubble">Bubble Sort</option>
              <option value="selection">Selection Sort</option>
              <option value="insertion">Insertion Sort</option>
              <option value="quick">Quick Sort</option>
            </select>
            <button
              className="inline-block text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded-lg"
              onClick={() => {
                setRunning(true);
                switch (selected) {
                  case "bubble":
                    bubbleSort(array, setArray, setRunning);
                    break;
                  case "selection":
                    selectionSort(array, setArray, setRunning);
                    break;
                  case "insertion":
                    insertionSort(array, setArray, setRunning);
                    break;
                  case "quick":
                    quickSort(array, 0, array.length - 1, setArray).then(() =>
                      setRunning(false)
                    );
                    break;
                  default:
                    setRunning(false);
                    break;
                }
              }}
            >
              Start
            </button>
            <button
              className="inline-block text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded-lg"
              onClick={() => {
                setArray(generateArray());
              }}
              disabled={running}
            >
              Reset
            </button>
          </div>
        </div>
      </nav>
      <div className="flex">
        {array.map((value) => (
          <div
            className={`mx-2 w-[25px] ${value.color}`}
            style={{ height: `${value.size * 5}px` }}
            key={value.key}
          ></div>
        ))}
      </div>
    </>
  );
}
