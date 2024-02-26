type Erictype = number | string | boolean
function addNumberOrString(a:Erictype, b: number | string) {
    if (typeof a === 'number' && typeof b == 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    else {
        throw new Error('Parameters must be number or string')
    }
}
console.log("check", addNumberOrString(2,4))