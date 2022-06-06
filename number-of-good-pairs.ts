function numIdenticalPairs(nums: number[]): number {
let count: number = 0;
    for (let i =0; i <nums.length; i++) {
        for(let j = 0; j < i; j++){
            if (nums[i] == nums[j]) {
                count ++;
            }
        }
    }
    return  count;
};


console.log(numIdenticalPairs([1,1,1,1]))
