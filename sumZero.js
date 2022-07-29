function sumZero(arr) {
    arr = arr.sort();
    left = 0;
    right = arr.length-1;

    for(let i=0; i<arr.length; i++){
        let sum = arr[left] + arr[right];
        if(sum == 0){
            return [arr[left],arr[right]];
        }
        else if(sum<0){
            left++;
        }
        else if(sum>0){
            right--;
        }
    }
}

let array = [-4,-3,-2,1,1,6,5];
console.log(sumZero(array));