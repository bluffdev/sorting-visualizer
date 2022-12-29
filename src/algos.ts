export type block = {
  size: number;
  color: string;
  key: number;
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function bubbleSort(
  a: block[],
  setArray: React.Dispatch<React.SetStateAction<block[]>>,
  setRunning: React.Dispatch<React.SetStateAction<boolean>>,
  speed: number
) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      a[j].color = "bg-red-400";
      a[j + 1].color = "bg-green-400";
      setArray([...a]);
      await sleep(speed);
      if (a[j].size > a[j + 1].size) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
      a[j].color = "bg-gray-400";
      if (j + 1 === a.length - i - 1) {
        a[j + 1].color = "bg-gray-400";
      } else {
        a[j + 1].color = "bg-red-400";
      }
      await sleep(speed);
      setArray([...a]);
    }
  }
  setRunning(false);
}

export async function selectionSort(
  a: block[],
  setArray: React.Dispatch<React.SetStateAction<block[]>>,
  setRunning: React.Dispatch<React.SetStateAction<boolean>>,
  speed: number
) {
  for (let i = 0; i < a.length - 1; i++) {
    a[i].color = "bg-orange-400";
    let min_idx = i;
    for (let j = i + 1; j < a.length; j++) {
      a[j].color = "bg-red-400";
      setArray([...a]);
      await sleep(speed);
      if (a[j].size < a[min_idx].size) {
        if (min_idx !== i) {
          a[min_idx].color = "bg-gray-400";
        }
        min_idx = j;
        a[min_idx].color = "bg-green-400";
        setArray([...a]);
      } else {
        a[j].color = "bg-gray-400";
        setArray([...a]);
      }
      await sleep(speed);
    }

    let temp = a[min_idx];
    a[min_idx] = a[i];
    a[i] = temp;
    a[i].color = "bg-gray-400";
    a[min_idx].color = "bg-gray-400";

    setArray([...a]);
  }
  setArray([...a]);
  setRunning(false);
}

export async function insertionSort(
  a: block[],
  setArray: React.Dispatch<React.SetStateAction<block[]>>,
  setRunning: React.Dispatch<React.SetStateAction<boolean>>,
  speed: number
) {
  for (let i = 1; i < a.length; i++) {
    let key = { ...a[i] } as block;
    let j = i - 1;

    while (j >= 0 && a[j].size > key.size) {
      a[j + 1].color = "bg-red-400";
      a[j].color = "bg-green-400";
      setArray([...a]);
      await sleep(speed);
      a[j + 1].size = a[j].size;
      a[j + 1].color = "bg-gray-400";
      a[j].color = "bg-gray-400";
      setArray([...a]);
      await sleep(speed);
      j -= 1;
    }
    a[j + 1].size = key.size;
    setArray([...a]);
    await sleep(speed);
  }
  setArray([...a]);
  setRunning(false);
}

async function partition(
  a: block[],
  low: number,
  high: number,
  setArray: React.Dispatch<React.SetStateAction<block[]>>,
  speed: number
) {
  let pivot = a[high];
  let i = low - 1;

  pivot.color = "bg-green-400";
  setArray([...a]);
  sleep(speed);

  for (let j = low; j <= high - 1; j++) {
    if (i > 0) {
      a[i].color = "bg-orange-400";
    }
    a[j].color = "bg-red-400";
    setArray([...a]);
    await sleep(speed);
    if (a[j].size < pivot.size) {
      if (i > 0) {
        a[i].color = "bg-gray-400";
      }
      i += 1;
      a[j].color = "bg-gray-400";
      let temp = a[i];
      a[i] = a[j];
      a[j] = temp;
      setArray([...a]);
      await sleep(speed);
    }
    a[j].color = "bg-gray-400";
  }
  if (i > 0) {
    a[i].color = "bg-gray-400";
  }
  let temp = a[i + 1];
  a[i + 1] = a[high];
  a[high] = temp;
  pivot.color = "bg-gray-400";
  setArray([...a]);
  await sleep(30);
  return i + 1;
}

export async function quickSort(
  a: block[],
  low: number,
  high: number,
  setArray: React.Dispatch<React.SetStateAction<block[]>>,
  speed: number
) {
  if (low < high) {
    let pi = await partition(a, low, high, setArray, speed);
    await quickSort(a, low, pi - 1, setArray, speed);
    await quickSort(a, pi + 1, high, setArray, speed);
  }
}
