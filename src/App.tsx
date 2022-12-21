import { useCallback, useEffect, useState } from "react";

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

  function bubbleSort(a: number[]) {
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length - i - 1; j++) {
        if (a[j] > a[j + 1]) {
          let temp = a[j];
          a[j] = a[j + 1];
          a[j + 1] = temp;
        }
      }
    }
    return new Array(...a);
  }

  return (
    <>
      <button
        className="border-1 p-2"
        onClick={() => {
          setArray(bubbleSort(array));
        }}
      >
        Sort
      </button>
      <button
        className="border-1 p-2"
        onClick={() => {
          setArray(generateArray());
        }}
      >
        Reset
      </button>
      <div className="flex">
        {array.map((value) => (
          <div
            className="border m-2 w-[25px]"
            style={{ height: `${value * 5}px` }}
            key={value}
          >
            a
          </div>
        ))}
      </div>
    </>
  );
}
// let nextId = 0;

// export default function List() {
//   const [name, setName] = useState("");
//   const [artists, setArtists] = useState(
//     new Array<{ id: number; name: string }>()
//   );

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <button
//         onClick={() => {
//           setName("");
//           artists.push({
//             id: nextId++,
//             name: name,
//           });
//         }}
//       >
//         Add
//       </button>
//       <ul>
//         {artists.map((artist) => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
