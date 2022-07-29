function peakElement(arr) {
    let first = 0;
    let last = arr.length-1;
    let n = arr.length;
        while(first <= last){
            let mid = Math.floor(first +(last-first)/2);
           // console.log(mid);
            if(mid>0 && mid<n-1){
                if(arr[mid-1]<arr[mid] && arr[mid+1]<arr[mid]){
                    return mid;
                }
                else if(arr[mid-1]>arr[mid]){
                    last= mid-1;
                    
                }
               else{
                    first= mid+1;
                }
            }
    
            else if(mid === 0){
                if(arr[0]>arr[1]){
                    return 0;
                }
                else{
                    return 1;
                }
            }
            else if(mid === n-1){
                if(arr[n-1]>arr[n-2]){
                    return n-1;
                }
                else{
                    return n-2;
                }
            }
        }
        return -1;
    }
    
    let array = [1,2,3,1];
    console.log(peakElement(array));