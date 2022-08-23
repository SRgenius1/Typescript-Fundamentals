export {};

const logIn = (data: {email: string, password: number}) => {
  console.log(data);
};

logIn({
  email: 'juandc@gmail.com',
  password: 124,
});
