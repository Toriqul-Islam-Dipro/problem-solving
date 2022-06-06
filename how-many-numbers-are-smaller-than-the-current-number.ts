function smallerNumbersThanCurrent(nums: number[]): number[] {
let finalArr:number[] = [];
for (let i = 0; i<nums.length; i++ ) {
    let count: number = 0;
    for(let j=0; j<nums.length;j++ ) {
        if(nums[i] >nums[j]) {
            count ++;
        }
    }
    finalArr.push(count);
}
return finalArr;
};


console.log(smallerNumbersThanCurrent([7,7,7,7]));
