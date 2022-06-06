
function finalValueAfterOperations(operations: string[]): number {
    let finalAns: number = 0;
    for (let i=0; i<operations.length; i++) {
        if (operations[i] === "X++" || operations[i] === "++X") {
            finalAns++;
        }
        else if (operations[i] === "X--" || operations[i] === "--X"){
            finalAns--;
        }
    }
return finalAns;
};

console.log(finalValueAfterOperations(["X++","++X","--X","X--"]))
