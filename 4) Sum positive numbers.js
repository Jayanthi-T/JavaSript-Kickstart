Sum positive numbers
Complete the function sumPositiveNumbers such that it returns the sum of all positive 
numbers from the numbers parameter it receives.

This challenge will help you combine some of the knowledge you acquired in this course. 
Take your time and make as many mistakes as possible!

/**
 * @param {number[]} numbers
 */
function sumPositiveNumbers(numbers) {
    let sum=0;
    numbers.forEach(function(number){
        if(number>0)
            sum += number;
    });
    return sum;
}

// Sample usage - do not modify
console.log(sumPositiveNumbers([15, -5, 10])); // 25
console.log(sumPositiveNumbers([-3, 4, -2, 1])); // 5
