export {};

const calcTotal = (prices: number[]): number => {
  let total = 0;
  prices.forEach(element => total += element);
  return total;
};

const rta = calcTotal([1,2,5,6,]);
console.log(rta);

