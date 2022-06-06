
function decompressRLElist(nums: number[]): number[] {
let resultArr: number[] = [];
for (let i = 0; i < nums.length; i++ )  {
    let freq = nums[2*i];
    let val = nums[2*i+1];
    for (let j=0; j <freq; j++){
        resultArr.push(val);
    }
}
    return resultArr;
};

console.log(decompressRLElist([1,1,2,3]))
