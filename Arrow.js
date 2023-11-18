//Arrow function 

/*let prod  =(num1,num2)=>{
    return num1*num2;
}*
 */

/*
let prod  = (num1,num2)=> num1*num2;
console.log(prod(20,3));*/

/*Output based questions*/

// const sum = (a,b)=>{
//     return a+b;
// };


let result =(()=>{
    let x =5;
    return()=> {
        x += 1;
        return x;

    };
})();

console.log(result)



