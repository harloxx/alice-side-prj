const findAllIndex = (arr: number[], value: any) => {
  let idx = arr.indexOf(value);
  let allIdx: number[] = [];
  while (idx != -1) {
    allIdx.push(idx);
    idx = arr.indexOf(value, idx + 1);
  }
  return allIdx;
};
export default findAllIndex;
