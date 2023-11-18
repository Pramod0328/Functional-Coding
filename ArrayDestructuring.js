/***important one */

const fruits = [
    'Apple',
    'mango',
    'kivi',
    'strawberry',
    'banana',
    'lichi',
];

//Binding pattern
/*const [a,m] = fruits; a =0,m=0 in index */
// const [a, ,k, ,s] =fruits;
// console.log(a,k,s);

/*** using rest operator */

const [a,m,...[,A, ma]] = fruits;
console.log(A,ma);
