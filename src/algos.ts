export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function bubbleSort(
  a: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
      await sleep(10);
      setArray([...a]);
    }
  }
  setRunning(false);
}
