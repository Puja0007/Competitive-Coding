function InfiniteArrayElement(arr,n){
    let first = 0;
    let last = 1;
    while(n>arr[last]){
        if(arr[last]<n){
            first = last;
            last = last*2;
        }
       
    }
    BinarySearch(arr,first,last,n);
}

function binarySearch(arr,first,last,elm){
    let low = first;
    let high = last;
    while(low<=high){
        let mid = Math.floor(low+(high-low)/2);
        if(elm>arr[mid]){
            low = mid+1;
        }
        else if(elm<arr[mid]){
            high = mid-1;
        }
        else{
            return mid;
        }
    }
    return -1;

}

