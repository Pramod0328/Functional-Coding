const input = [1,2,3,4,5,6,7,8,9,10];

/**const result = input.reduce((total, num, index)=>{
    console.log(total,index);
    return total+num;

})**/

// console.log(result);

const evenResult = input.reduce((acc,num)=>{
    return num%2===0 ? acc +num : acc;

},0);

console.log(evenResult);

const number =[];

const numresult = number.reduce((acc,curr)=>acc+curr,5);

console.log(numresult);