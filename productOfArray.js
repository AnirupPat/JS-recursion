let res1 = 1;
const productOfArray = (array) => {
    if(array.length === 0) return;
    res1 *= array.shift();
    productOfArray(array);
    return res1;
}

console.log(productOfArray([1,2,3,10]));