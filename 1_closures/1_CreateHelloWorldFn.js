// leetcode 2667
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};

const f=createHelloWorld();
console.log(f());