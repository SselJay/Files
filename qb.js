function getQuestion(){
var nums = ["who","why","where","when","him","us","them","they","you","her"],
    ranNums = [],
    i = nums.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
}
console.log(ranNums);
}

getQuestion();