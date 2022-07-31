function rotatedSortedArray(arr){
    let first = 0;
    let last = arr.length-1;
    var count=0;
    let N = arr.length;
    while(first<=last){
        let mid = Math.floor(first +(last-first)/2);
        let currentVal = arr[mid];
        let next = (mid+1) % N;
        let prev = (mid-1+N)% N;
        if(currentVal<=arr[next] && currentVal <= arr[prev]){
            return mid;
        }
        else if(arr[first]<= currentVal){
            first = mid+1;
        }
        else if(currentVal <= arr[last]){
            last = mid-1;
        }
      
    }
    return count;
}

let arr1 = [15, 18, 2, 3, 6, 12];
console.log(rotatedSortedArray(arr1));