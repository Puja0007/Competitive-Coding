function NearlySortedArr(arr,n){
    let first = 0;
    let last = arr.length-1;
    while(first<=last){
        let mid = Math.floor(first+(last-first)/2);
        if(arr[mid] == n){
            return mid;
        }
        else if(mid+1<=last && arr[mid+1]== n){
            return mid+1;
        }
        else if(mid-1<=first && arr[mid-1] == n){
            return mid-1;
        }
        else if(n>mid){
            first = mid+2;
        }
        else if(n<mid){
            last = mid-2;
        }
    }
    return -1;
}

let arr = [1,2,3,5,4];
console.log(NearlySortedArr(arr,5));