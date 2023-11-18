/***important one */

const car = {
    name: 'car',
    color: 'black',
    getDetails(brand,seats){
        console.log(`
        This is a ${this.color} ${this.name} of ${brand} company.
        It has ${seats} seats
        `);
    },
};

const bus = {
    name: 'bus',
    color: 'blue',

};

/* here we can call the object using getDetails  here we called the bus object inside the getdetails functions*/

car.getDetails.call(bus,"BMW",78);
/** we can apply using array */
car.getDetails.apply(bus,["gold", 90]);

/**it will bind the bus in the getdetails function */
const vahicle = car.getDetails.bind(bus);

vahicle("Silver",78);