import { useState } from "react";
import { bubbleSort, block } from "./algos";

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
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-2 text-2xl">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="flex text-sm lg:flex-grow items-center">
            <button
              className="inline-block text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded-lg"
              onClick={() => {
                setSelected("bubble");
              }}
            >
              Bubble
            </button>
            <button
              className="inline-block text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded-lg ml-4"
              onClick={() => {
                setRunning(true);
                switch (selected) {
                  case "bubble":
                    bubbleSort(array, setArray, setRunning);
                  default:
                    console.log("Select an algorithm");
                }
              }}
            >
              Start
            </button>
            <button
              className="inline-block text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded-lg ml-4"
              onClick={() => {
                setArray(generateArray());
              }}
              disabled={running}
            >
              Reset
            </button>
            <label className=" text-white py-2 px-6">Size</label>
            <input type="range" min="0" max="100" />
            <label className=" text-white py-2 px-6">Speed</label>
            <input type="range" min="0" max="100" />
          </div>
        </div>
      </nav>
      <div className="flex">
        {array.map((value) => (
          <div
            className={`m-2 w-[25px] ${value.color}`}
            style={{ height: `${value.size * 5}px` }}
            key={value.size}
          ></div>
        ))}
      </div>
    </>
  );
}
