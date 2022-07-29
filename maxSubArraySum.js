function MaxSubArraySum(arr,n) {
    let maxSum = 0;
    let tempSum = 0;
    
    for(let i=0; i<n; i++){
        maxSum = maxSum + arr[i];
    }
    tempSum = maxSum;

    for(let i=n; i<arr.length; i++){
        tempSum = tempSum-arr[i-n] + arr[i];
        if(tempSum>maxSum){
            maxSum = tempSum;
        }
    }
    return maxSum;
}

let array = [2,6,9,2,1,8,5,6,3];
console.log(MaxSubArraySum(array,3));