function firstOccurenceInfiniteArray(arr,n){
    let first = 0;
    let last = 1;

    while(arr[last]<n){
        if(arr[last]<n){
            first = last;
            last = last*2;
        }
    }
    return FirstOccurence(arr,first,last,n);
}
function FirstOccurence(arr,first,last,ele){
    let low = first;
    let high = last;
    let firstOccur=-1;
    while(low<=high){
        let mid = Math.floor(low+(high-low)/2);
        if(arr[mid]==ele){
            firstOccur = mid;
            high = mid-1;
        }
        else if(arr[mid]>ele){
            high = mid-1;
        }
        else if(arr[mid]<ele){
            low = mid+1;
        }
    }
    return firstOccur;
}

let arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0, 1, 1, 1, 1,1,1, 1, 1, 1,1,1, 1, 1, 1,1,1, 1, 1, 1,1,1];

console.log(firstOccurenceInfiniteArray(arr,1));