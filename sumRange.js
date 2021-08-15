let result = 0;
const sumRange = (value) => {
    if(value === 0) return;
    result += value;
    sumRange(value-1);
    return result;
}

console.log(sumRange(4));