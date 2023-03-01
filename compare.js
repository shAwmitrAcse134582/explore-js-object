const first = {
    a: 2
}
const second = {
    a: 2,
    b: 5
}
// if (first === second) {
//     console.log('they are same')
// }
// else {
//     console.log('different');
// }
// const third = second;

// if (third === second) {
//     console.log('they are same')
// }
// else {
//     console.log('different');
// }

// const firstStringify = JSON.stringify(first);
// const secondStringify = JSON.stringify(second);

// if (firstStringify === secondStringify)
//     console.log("same");
// else
//     console.log("different");

//*compare object
function compareObject(first, second) {
    const firstkeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if (firstkeys.length === secondKeys.length) {
        for (const key of firstkeys) {
            if (first[key] !== second[key]) {
                return false;
            }
        }
        return true;
    }

}

const isSame = compareObject(first, second);
console.log(isSame);


