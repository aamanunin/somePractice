let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string, number];

myString = 'Hello'.slice(0, 3);
myNum = 22 + 5.5;
myBool = true;
myVar = false;
numArr = [123, 123, 1];
strArr = ['Hello', 'World'];
boolArr = [true, false, false];
strNumTuple = ['Hello', 5];

let myVoid: void = null;
let myVoid2: void = undefined;
let myNull: null = undefined;
let myUndefined: undefined = null;

console.log(myNum);
console.log(myBool);
console.log(myString);
console.log(myVar);
console.log(strArr);
console.log(numArr);
console.log(boolArr);
console.log(strNumTuple);
console.log(myVoid);
console.log(myVoid2);