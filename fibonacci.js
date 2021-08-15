let final = [0,1];
const fibonacci = (count) => {
    if(final.length === count) return;
    final.push(final[final.length-1]+final[final.length-2]);
    fibonacci(count);
    return final;
}

console.log(fibonacci(8));