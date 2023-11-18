function movie(title){
    this.title = title;
}

const movie1  = new movie('The Avangers');
 movie1.year = 2012;
 console.log(movie1);
 console.log(movie1.__proto__);


 const array = [1,2,3,4,5];
 console.log(array.__proto__);