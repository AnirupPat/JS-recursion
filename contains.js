var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
};

const contains = (obj, search) => {
    for(let key in obj) {
        if(typeof obj[key] === 'object') {
            return contains(obj[key], search);
        } else {
            if(obj[key] === search) {
                return true;
            }
        }
    }
    return false;
}

console.log(contains(nestedObject, 44));
console.log(contains(nestedObject, "foo"));