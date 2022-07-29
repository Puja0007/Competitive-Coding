// with helper method and external array

function getOddNumbers(arr) {
    let oddArr = [];
function helper(arr1){
    if(arr1.length === 0){
        return;
    }
    if(arr1[0]%2 != 0){
        oddArr.push(arr1[0]);
    }
    helper(arr1.slice(1))
}

helper(arr);
return oddArr;
}

console.log(getOddNumbers([3,6,7,8,9]));

// without helper method and external array

function collectOddArray(arr) {
    if(arr.length ==0){
        return arr
    }
    else{
        if(arr[0]%2 === 0){
            collectOddArray(arr.splice(0,1));
        }
    }
  
}

console.log(collectOddArray([4,7,9]));