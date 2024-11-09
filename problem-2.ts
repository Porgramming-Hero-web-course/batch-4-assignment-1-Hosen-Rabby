{
  // function to remove duplicate number of an array
  function removeDuplicates(arr: number[]): number[] {
    let i = 0;
    while (i < arr.length) {
      if (arr.indexOf(arr[i]) !== i) {
        arr.splice(i, 1);
      } else {
        i++;
      }
    }
    return arr;
  }
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}
