export type block = {
  size: number;
  color: string;
};

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function bubbleSort(
  a: block[],
  setArray: React.Dispatch<React.SetStateAction<block[]>>,
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      a[j].color = "bg-red-400";
      a[j + 1].color = "bg-green-400";
      setArray([...a]);
      await sleep(5);
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
      await sleep(5);
      setArray([...a]);
    }
  }
  setRunning(false);
}
