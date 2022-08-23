export {};

function createProductToJson
(title: string, createdAt: Date, stock: number, size: number ) {
  return {
    title,
    createdAt,
    stock,
    size,
  };

};

const product1 = createProductToJson('v1', new Date(), 12, 13);
console.log(product1);
console.log(product1.createdAt);

const product2 =
(title: string, createdAt: Date, stock: number, size?: number) => {
  return {
    title,
    createdAt,
    stock,
    size,
  };
};

const productowo = product2('v1', new Date(), 12, 13);
console.log(productowo);
console.log(productowo.createdAt);


