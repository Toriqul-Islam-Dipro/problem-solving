function runningSum(nums: number[]): number[] {

    let ans: number[] = [];
    let sum = 0;
    for (let i=0; i<nums.length; i++) {
        sum += nums[i];
        ans.push(sum);
    }
    return ans;
};


console.log(runningSum([1,2,3,4]));


//Solved
