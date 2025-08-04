//leetcode 2723
var addTwoPromises = async function(promise1, promise2) {
    const n1= await promise1;
    const n2=await promise2;
    return n1+n2;
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2))
   .then(console.log); 