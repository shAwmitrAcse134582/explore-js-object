//*create object using object literals

const player = {};
player.name = "shawmitra";
player.speciality = "wk & batsman";
player.bat = function () {
    console.log("swing Your Bat");
}
console.log(player);
player.bat();

const student = {
    name: 'shawmitra',
    job: 'Software engineer',
    ball: function () {
        console.log("through the ball");
    },
    salary: 40000

}

//*object Constructor
const person = new Object();
console.log(person);

//*object create method
const item = Object.create(student);
console.log(item.name);


//*using class;
class man {
    name = 'shawmitra';
    address = 'barishal';
    constructor(age) {
        this.age = age;
    }
}

const person1 = new man(21);
console.log(person1);

//*using function to create an object

function car(model, price) {
    this.model = model;
    this.price = price;
}

const tesla = new car('elon', 32);
console.log(tesla);