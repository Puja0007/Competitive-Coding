function getFrequencyObj(arr1,arr2){
    if(arr1.length != arr2.length){
        return false;
    }
    let frequencyObjOfarr1 = {};
    let frequencyObjOfarr2 = {};
  // creating object which will contain frequency of each element in Object
    for(let val of arr1){
        frequencyObjOfarr1[val] = frequencyObjOfarr1[val] ? frequencyObjOfarr1[val]+1 : 1;
    }

    for(let val of arr2){
        frequencyObjOfarr2[val] = frequencyObjOfarr2[val] ? frequencyObjOfarr2[val]+1 : 1;
    }
    let count =0;
   for(let val of arr1){
       if(frequencyObjOfarr1[val] == frequencyObjOfarr2[val*val]){
        count++;
       }
   }
   if(count == arr1.length){
       return true;
   }
   else {
       return false;
   }
}

let arr1= [1,2,3,2]
let arr2 = [9,4,4,2]
console.log(getFrequencyObj(arr1,arr2));


