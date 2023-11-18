/**Object destrcturing */

const obj = {
    a:1 ,
    b:2,
    c:['0','B','J'],
    d:{value:'Val'}
}

//const {a, b, c, d} = obj; // const a = obj.a;
// console.log(a);
// console.log(b);
// console.log(c);

const { a:a1 }  = obj;// here obj.a = a1;
console.log(a1);

//assignment pattern

let b;
({b:b}=obj);
console.log(b);



let object = { firstName: "John", lastName: "Doe" };
let { firstName: fn, lastName: ln } = object;
console.log(firstName);