function hasTargetSum(array, target){
  const seenNumbers= {};

  for (const number of array){
    const complement = target - number;
    if(seenNumbers[complement])return true;seenNumbers[number] = true;
  }
  return false;
}

/*
Create an empty object=> seenNumbers
Iterate through every item in the array.
Create the complement
If any item matches the complement, return true, otherwise push the item to the empty object

 */



/*function hasTargetSum(array, target) {
  for(let i=0; i < array.length ; i++){
    const complement = target - array[i];

    for(j= i+1; j< array.length; j++){
      if(complement === array[j]){
        return true
      }
    }
  }
  return false
}
*/
/* 
  O(n^2)=>Quadratic(Because of the nested iteration)
*/

/* 

  compare the first index of the array and add all the other indexes one by one
eg: [1,2,3,4,5]
  begin with 1=>(do 1+2=> compare it to targetSum. If true return true and exit. If false, go to the next and repeat the same. )
*/
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
