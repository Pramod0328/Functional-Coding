/*IIFE(Imediate invoked function execution)*/

// (function(a,b){
//     console.log(a*b);
// })(1,3);

/*const user = (function(){
    /****This is a private value we can't access outside the function **********/
 /*   let userData={
        userName : "Pramod",
        userAge : 23
    }

    function getName(){
        console.log(userData.userName);
    }

    function updateAge(age){
        console.log(userData.userAge+age)
    }
    return{getName, updateAge};
})();


console.log(user);
user.getName();
user.updateAge(1);*******/



function main(){
    return(function(){
        console.log("hello user");
    })();
}

const result  = main();


var x =10;

(function(){
    console.log(x);
})();


