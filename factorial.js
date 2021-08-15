let finalRes = 1;
const recursionCall = (value) => {
    finalRes *= value;
    if(value === 1) return;
    recursionCall(value-1);
    return  finalRes;
}

console.log(recursionCall(5));