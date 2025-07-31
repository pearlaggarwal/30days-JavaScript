//leetcode 2704
var expect = function(val) {
    return {
        toBe: function(val1){
            if(val===val1) return true;
            else throw new Error("Not Equal");
        },
        notToBe: function(val1){
            if(val!==val1) return true;
            else throw new Error("Equal");
        }
    }
};
try {
    console.log(expect(5).toBe(5));     
    console.log(expect(5).notToBe(5));   
} catch (e) {
    console.log(e.message);              
}