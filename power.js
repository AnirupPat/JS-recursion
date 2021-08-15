let res = 1;
const power = (base, expo) => {
    if(expo === 0) return 1;
    res *= base;
    power(base, expo-1);
    return res;
}

console.log(power(3,3));