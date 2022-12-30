export type block = {
  size: number;
  color: string;
  key: number;
};

export function generateArray(size: number) {
  let values = new Set<number>();
  let array = new Array<block>(size);
  for (let i = 0; i < size; i++) {
    let newValue = Math.floor(Math.random() * (275 - 25) + 25);
    values.add(newValue);
    array[i] = {
      size: newValue,
      color: "bg-gray-600",
      key: i,
    };
  }
  return array;
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function swap(a: block[], i: number, j: number) {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}
