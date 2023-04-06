function pita(a, b, c) { 
    if (Number.isNaN(a)) {
        return false;
    } 
    if (Number.isNaN(b)) {
        return false;
    }
    if (Number.isNaN(c)) {
        return false;
    }
    
    return a * a+ b * b === c * c;
}

console.log(pita(3, 4, 5));
console.log(pita(1, 2, 3));

/* if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number"){
    return false
}*/

function add(a, b, c) {
    return a + b === c;
}
function multiplay( a, b, c) {
    return a * b  === c;
}
function divide(a, b, c) {
    return a % b === c;
}
function substract( a, b , c) {
    return b - c  === a;
}
console.log(add(5, 6, 7));
console.log(multiplay(5, 6, 7));
console.log(divide(100, 10, 2));
console.log(substract(10, 20, 30));