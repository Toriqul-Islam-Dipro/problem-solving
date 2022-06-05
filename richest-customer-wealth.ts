function maximumWealth(accounts: number[][]): number {

let ans: number = 0;
    for (let i = 0; i < accounts.length; i++ ) {
        let sum: number = 0;
        for (let j=0; j<accounts[i].length; j++) {
          sum +=  accounts[i][j];
        }
        if (sum > ans) {
            ans = sum;
        }
    }
    return ans;

};

console.log(maximumWealth([[5,5,5,],[10,10,10]]));