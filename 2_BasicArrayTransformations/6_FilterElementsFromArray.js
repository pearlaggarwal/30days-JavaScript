// leetcode 2634

var filter = function(arr, fn) {
    let filteredArr=[];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};

const arr = [1, 2, 3, 4, 5];
const even = filter(arr, (num) => num % 2 === 0);
console.log(even);