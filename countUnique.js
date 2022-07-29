function countUnique(arr) {
   let left = 0;
    let right = 1;
    if(arr.length == 0){
        return arr;
    }

   for(let j=1; j<arr.length; j++){
      right = j;
       if(arr[left]!=arr[right]){
           left++;
           arr[left] = arr[right];
       }
     
   }
   arr.length = left+1;

   return arr;
}

let array = [2,3,2,2,4,4,1,1];
let sortedArray = array.sort();
console.log(countUnique(sortedArray));