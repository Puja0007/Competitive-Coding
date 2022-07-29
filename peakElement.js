function peakElement(arr) {
let first = 0;
let last = arr.length-1;

let count = 0;
    if(arr.length === 1){
        return 0;
    }

    while(first <= last){
        let mid = Math.floor(first +(last-first)/2);
        count++;
        console.log(mid,first,last,count);
        if(arr[mid-1]<arr[mid] && arr[mid+1]<arr[mid]){
            return mid;
        }
        else if(arr[first+1]<arr[first]){
            return first;
        }
        else if(arr[last-1]<arr[last]){
            return last;
        }
        else if(arr[mid-1]>arr[mid]){
            last= mid-1;
            
            
        }
        else if(arr[mid+1]>arr[mid]){
            first= mid+1;
            
    
        }
    }
    return -1;
}

let array = [1,2,3,1];
console.log(peakElement(array));