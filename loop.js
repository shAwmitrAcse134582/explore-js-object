const numbers = [12, 54, 65, 3, 54];
for (number of numbers) {
    console.log(number);
}

const bottle = {
    color: 'yellow',
    price: 50,
    isCleaned: true,
    capacity: 1
}

//*for of cant be used with object
// for (const key of bottle) {
//     console.log(key);
// }
const keys = Object.keys(bottle);
for (const key of keys) {
    console.log(key);
}

for (const key in bottle) {
    console.log(key, bottle[key]);
}

for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}