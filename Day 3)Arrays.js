// Objective

// In this challenge, we learn about Arrays. Check out the attached tutorial for more details.

// Sample Input 0

// 5
// 2 3 6 6 5

// Sample Output 0

// 5

function getSecondLargest(nums) {
    let max1=0,max2=0;
    for(let i in nums){
        if(nums[i]>max1)
            max1=nums[i];
    }
    for(let j in nums){
        if(nums[j]<max1 && nums[j]>max2)
            max2=nums[j];
    }
    return max2;
}// Complete the function


// function getSecondLargest(nums) {
//     let t;
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i]<nums[j]){
//                 t=nums[i];
//                 nums[i]=nums[j];
//                 nums[j]=t;
//             }
//         }
//     }
//     let max2=nums[1];
//     console.log(max2);
// }
