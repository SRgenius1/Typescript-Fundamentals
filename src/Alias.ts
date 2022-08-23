export {};

type UserID = string | boolean | number;
let idUsuario: UserID;

function greeting (param: UserID) {
  if (typeof param === 'boolean') {
    console.log('Wolas');
  } else {
    console.log('Hahah');
  }
}


// UNION TYPES

type Sizes = 'm' | 'x' | 'xl' | 'l';

const shirtSize:Sizes = 'm';
const pantSize:Sizes = 'l';
