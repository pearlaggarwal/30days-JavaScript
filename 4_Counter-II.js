// leetcode 2665

var createCounter = function(init) {
    let count=init
    return{
        increment(){
            count+=1;
            return count;
        },
        decrement(){
            count-=1;
            return count;
        },
        reset(){
            count=init;
            return count;
        }
    }
};


const counter = createCounter(5)
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
