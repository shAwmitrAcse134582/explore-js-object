
//*3.1
const num = () => 89;

const val = num();
console.log(val);

//*3.2

const numb = (n) => n / 17;

const value = numb(34);
console.log(value);

//*3.3
const fun = (a, b) => {
    const add = a + b;
    if (add % 2 !== 0)
        return false;
    else
        return true;
}

console.log(fun(10, 5));


//*3.4
const arr = (ar) => {
    let sum = 0;
    for (const a of ar) {
        sum += a;
    }
    return sum * sum;
}

const ar = [1, 2, 3, 4];
const para = arr(ar);
console.log(para);