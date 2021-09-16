Sum odd numbers :

Complete the function sumOddNumbers such that it returns the sum of all 
the odd numbers from the numbers parameter it receives.
The function should also work for negative numbers.

/**
 * @param {number[]} numbers
 */
function sumOddNumbers(numbers) {
    return numbers.reduce(function(sum,curr){
        if(curr % 2 !== 0)
            sum += curr;
        return sum;
    },0);
}

// Sample usage - do not modify
console.log(sumOddNumbers([15, 5, 10])); // 20
console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8
console.log(sumOddNumbers([-2, -3, 4, 5, 6])); // 5
