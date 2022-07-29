function orderAgnosticSearch(arr,n) {
    let first = 0;
    let last = arr.length-1;
    

    while(first<=last){
        let mid = Math.floor(first+(last-first)/2);
        if(arr[mid]>arr[mid-1]){
            let currentVal = arr[mid];
            if(currentVal>n){
                last = mid-1;
            }
            else if(currentVal<n){
                first = mid+1;
            }
            else{
                return mid;
            }
        }
        else {
            let currentVal = arr[mid];
            if(currentVal>n){               
             first = mid+1;
            }
            else if(currentVal<n){
                last = mid-1;
            }
            else{
                return mid;
            }
        }
    }
}