                    // 1. Sum numbers
// Create a function sum() that will sum all argument passed to it.
// Quantity of the arguments is unknown.

const sum = (...nums) => {
     return nums.reduce((acc, el) => acc + el)
}

console.log(sum(20,30,40))