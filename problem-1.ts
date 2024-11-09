{
  const sumArray = (n1: number[]): Number => {
    let p: number = 0;
    for (const n of n1) {
      p += n;
    }
    return p;
  };
  console.log(sumArray([1, 2, 3, 4, 5]));
}
