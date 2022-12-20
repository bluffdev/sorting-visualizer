import { useState } from "react";

function generateArray() {
  let array = new Array<number>(50);
  for (let i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * (100 - 25) + 25);
  }
  return array;
}

export default function App() {
  let [array, setArray] = useState(generateArray());

  return (
    <div className="flex">
      {array.map((a) => (
        <div className="border m-2 w-[25px]" style={{ height: `${a * 5}px` }}>
          a
        </div>
      ))}
    </div>
  );
}
