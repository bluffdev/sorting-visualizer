import React, { useState } from "react";
import { bubbleSort, block, insertionSort, selectionSort, quickSort } from "./algos";

function generateArray(size: number) {
  let values = new Set<number>();
  let array = new Array<block>(size);
  for (let i = 0; i < size; i++) {
    let newValue = Math.floor(Math.random() * (275 - 25) + 25);
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
  let [size, setSize] = useState(80);
  let [speed, setSpeed] = useState(7);
  let [array, setArray] = useState(generateArray(size));
  let [running, setRunning] = useState(false);
  let [selected, setSelected] = useState("");

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-2 text-3xl">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="flex text-sm lg:flex-grow items-center justify-center">
            <label className=" text-white py-2 px-6 ml-2">Size</label>
            <input
              type="range"
              min="10"
              max="150"
              step={5}
              value={size}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setSize(Number(event.target.value));
                setArray(generateArray(size));
              }}
            />
            <label className=" text-white py-2 px-6">Speed</label>
            <input
              type="range"
              min="0"
              max="14"
              value={speed}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setSpeed(Number(event.target.value));
              }}
            />
            <select
              className="inline-block text-white bg-gray-800 border-0 py-2 px-6 mx-3 focus:outline-none hover:bg-gray-900 rounded-lg"
              value={selected}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                setSelected(event.target.value);
              }}
            >
              <option value="none">Pick Algorithm</option>
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
                    bubbleSort(array, setArray, setRunning, 20 - speed);
                    break;
                  case "selection":
                    selectionSort(array, setArray, setRunning, 20 - speed);
                    break;
                  case "insertion":
                    insertionSort(array, setArray, setRunning, 20 - speed);
                    break;
                  case "quick":
                    quickSort(array, 0, array.length - 1, setArray, 20 - speed).then(() =>
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
                setArray(generateArray(size));
              }}
              disabled={running}
            >
              Reset
            </button>
          </div>
        </div>
      </nav>
      <div className="flex justify-center w-full">
        {array.map((value) => (
          <div
            className={`border w-full ${value.color}`}
            style={{ height: `${value.size * 3}px` }}
            key={value.key}
          ></div>
        ))}
      </div>
    </>
  );
}
