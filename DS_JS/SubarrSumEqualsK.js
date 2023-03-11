const subarraySum = (nums, k) => {
    let answer = 0;
    nums.reduce((acc, val) => {          
        if(acc + val === k) {
            answer++;
            return val;
        }
        if(val === k) {
            answer++
            return val
        }
        return acc + val;
    }, 0)

    return answer;
};

console.log(subarraySum([-1,-1,1], 0));
console.log(subarraySum([1,1,1], 2))