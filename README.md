# Typescript-Fundamentals
## BY JUAN DAVID REYES 
# Why use TypeScript?

- Reduction of bugs in our code since TypeScript is typed.
- You can prevent 15% of bugs in your code.
- TypeScript constantly analyzes your code finding flaws.

# JavaScript vs. TypeScript

- In JavaScript we only realize the errors until its execution.
- TypeScript does it while we are writing the code.

A JS developer differs from a TS developer in only a few minor ways, but they do have a certain difference.

# TypeScript installation

```jsx
npm install typescript --save-dev
```

We are installing TS locally to just work on a folder (so it's a normal professional flow).

It is not recommended to work with TS globally.

```jsx
npx
```

With npx we can run the utilities that we installed earlier.

```jsx
npx tsc --version
```

View the current TS version.

# The TypeScript compiler

- The transpilation process is to convert TS code to JS code.
    
    ![ctf-8.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e922475f-5088-4a0d-8f0a-14217bc619d6/ctf-8.jpg)
    

## Compiling .ts files

```jsx
npx tsc (file address)
```

This will create a new JS file with our TS code translated to JS.

```jsx
npx tsc (file address) --target es6
```

The default translation is to ES3 so we have to modify this to have the new JS benefits by installing ES6.

```jsx
npx tsc (file address) --target es6 --outDir (folder name)
```

It is necessary to have a specific folder to be able to receive the compilations and usually we always use a folder named with the Dist flag.

```jsx
node (file path)
```

With this command we can have the response directly in the console without having to compile.

# TSConfig.json

The configuration file allows us to automate some processes and to simplify our work.

```jsx
npx tsc --init
```

With this command we can create the TSConfig.json file

### Inside the file

- First we can modify the “rootDir” option to indicate where the code that we are trying to compile is going to be.
- Then we can modify the “Outdir” option to be able to indicate which is the folder in which we want it to store the already compiled code.

Once these options are configured we can simplify our compilation to just:

```jsx
npx tsc
```

Files containing errors are transpiled regardless of their characteristics.

### Active Compilation

```jsx
npx tsc --watch
```

With this command we can have an active listener in which it will always be compiling at the time we are writing code.

# PRIMITIVE DATA TYPES 🚩

# What is typing in TypeScript?

JavaScript has types but it doesn't have a strong typing system in which you declare values ​​before assigning them.

![tsl.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2f968773-c937-48a1-a29a-7f4c2fe51f20/tsl.jpg)

### Declaration of a variable or constant in TS

We first have the statement

```jsx
const productPrice
```

Then we have the typing and the assignment of the value, this is known as Type Annotation which is the action of giving a data type to a variable.

```tsx
const productPrice: number = 12;
```

# Inferred types

When we talk about inferred types, we refer to the fact that TS infers the type of data that the variable contains without us having to give it a certain equivalence.

```tsx
let productName = 'Product 1';
```

By default TS infers that this is a variable of type STRING.

### Integration with the editor

By having an established data type, the editor only allows us to access the methods with which that data type has interaction.

### Variable assignment conflict

When we have a name of a variable with a name and give it that same name in another file, it begins to mark a reassignment error and for that we have 2 solutions

1. Use an anonymous function that calls itself and put our code inside it.
2. Use a module system.
3. Use the feature

```tsx
export {};
```

# number

- Inferred form

```tsx
let productPrice = 100;
```

- Explicit form

```tsx
let productPrice:number = 100;
```

## Cases

- When we want to initialize a variable but we still do not have a value to assign to it, we must always declare the type of value that the variable will contain.

```tsx
let productPrice:number;
```

TS static code analysis will give us an error if we work with a variable that does not have a certain value.

## Types of numbers

- Hex number

```tsx
let hex = 0xfff;
```

- binary number

```tsx
let bin = 0b10101;
```

In order to handle them we have to use the first 2 spaces either 0b for binary or 0x for hexadecimal.

## number and Number

Number is a type but it has nothing to do with the set
or numbers that we need to use based on the number object, in conclusion we should not work with "Number" but with "number".

# Booleans

- Inferred form

```tsx
let isEnable = true;
```

- Explicit form

```tsx
let isEnable: boolean = true;
```

# Strings

- Inferred form

```tsx
let isString = 'Wolas';
```

- Explicit form

```tsx
let isString:string = 'Wolas';
```

## Cases

There are different ways to declare arrays and in this way we can use (’’) (””) (``)

## string and String

It is a bad practice and it happens the same as with the number type.

# Arrays

- Inferred form (only 1 type)

In this way it will establish that it will be an array of only numbers, the same is with strings or Booleans.

In this way we can not put other different types with the push() function either.

```tsx
let prices = [1,2,3,4];
```

- Inferred form (various types)

In this way TS infers that it is an array with 3 types. (number, boolean, string).

```tsx
let prices = [1,23,'Wolas',true];
```

- Explicit form (1 or several types)

```tsx
let mixed: (number | string | boolean)[] = [];
```

#Any

Any has no inferred type.

- Explicit form

```tsx
let myDinamicVar:any = 'Wolas';
```

With any the typing in TS is deactivated.

According to many developers any tends to be a bad practice.

# Union Types

With the Union Types we give that flexibility that we want to TS.

```tsx
let userId: string | number;

userId = 12;
userId = 'Wolas';
```

# Aliases and literal types

With the word **type** we will create our own types type is a TypeScript reserved word so it only exists in TS.

```tsx
type UserId = string | boolean | number;
```

The recommendation is to write it in pascalCase (the first capital letter)

```tsx
type UserID = string | boolean | number;
let userid: UserID;

function greeting (param: UserID) {
  if (typeof param === 'boolean') {
    console.log('Wolas');
  } else {
    console.log('Hahah');
  }
}
```

## literal types

With these we intend to have default options for users.

```tsx
let shirtSize: 'm' | 's' | 'xl';
```

If we assign a different value, it will not work correctly because the literal types offer us only to use the options that it has previously declared.

```tsx
typeSizes = 'm' | 's' | 'x' | 'xl';

const shirtSize:Sizes = 'm';
const pantSize:Sizes = 'l';
```

# Null and undefined

When we give a variable "Null" or "Undefined" as data type, it takes it as if it were Any (this only happens when we use the inferred type)

```tsx
let myNull = null;
let myUndefined = undefined;
```

It is different when we type the variable with Null and with Undefined

Using a union type we can give it as that optional value of null for when we need to start a variable from an unknown value.

```tsx
let myChangeNumber: number | null = null;
```

When we have strings we can use undefined in the same way that we use null.

```tsx
let myChangeString: string | undefined = undefined;
```

# Functions

```tsx
function createProductToJson
(title: string, createdAt: Date, stock: number, size: number ) {
  return {
    title,
    createdAt,
    stock,
    size,
  };

};

const product = createProductToJson(
  'v1', newDate(), 12, 13
);
```

- Parameters in functions have to be typed.
- If we do not send all the complete parameters, it will give us an error.

## Optional parameters

- There are methods for this, the first is to give it the flexibility to send a data type or an undefined or null.
- The most optimal method is to add a “?” after the parameter name

```tsx
size?: number
```

# Return of functions

In the previously seen functions we have an inferred type in the return of the functions, but now we are going to give it that type that we are looking for in the return of a function.

```tsx
const calcTotal = (prices: number[]): number => ...
```

If we give a number as a return value, we cannot return a string.

## Functions that have no return

The functions that have no return are the ones that do not necessarily return something but cause the call to another function.

- When a function does not return anything, its default data type is void.
- If you give a void type to a function, it will not be able to return anything because the void data type does not allow anything to be returned.

# Objects in functions

How we send objects as parameters in functions.

The procedure is to put a parameter with a name and give it an object type like the following example

```tsx
const logIn = (data: {email: string, password: number}) =>
```

We can also add a “?” when we want a parameter inside the object to be optional.

# Modules: import and export

When we want to use module files we tend to do the following classification on the files.

```tsx
product.model.ts
```

The model doesn't mean anything to TS but it does tell us visually that it's a file that uses modules.

at the beginning At the beginning of each function, variable or type we add the word export to know that this is going to be used in another file

```tsx
export type Sizes = 's' | 'm' | 'xl';
```

The way to import is (bringing a variable, type or function from another file is)

```tsx
import { Sizes } from './products/Sizes.ts';
```

## Thank you for viewing this Repo, a hug!

Follow me on [Instagram](https://www.instagram.com/dev_juan22/)
Follow me on [Facebook](https://www.facebook.com/juandavid.reyesbedoya.7)
Follow me on [Youtube](https://www.youtube.com/channel/UCacHqx898rhli-vmmjSmkWw)

