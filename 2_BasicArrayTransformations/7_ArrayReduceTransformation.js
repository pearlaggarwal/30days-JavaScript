// leetcode 2626

function reduce(nums, fn, init) {
    let val = init;
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
}

const nums = [1, 2, 3, 4];
const sum = reduce(nums, (acc, curr) => acc + curr, 0);
console.log(sum);