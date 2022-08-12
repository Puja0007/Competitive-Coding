function peakElement(arr) {
    let first = 0;
    let last = arr.length-1;
    let n = arr.length;
        while(first <= last){
            let mid = Math.floor(first +(last-first)/2);
            let next = (mid+1) % n;
            let prev = (mid-1+n)% n;
           // console.log(mid);
            if(mid>0 && mid<n-1){
                if(arr[prev]<arr[mid] && arr[next]<arr[mid]){
                    return mid;
                }
                else if(arr[prev]>arr[mid]){
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
    
    let array = [1,3,8,12,4,2];
    console.log(peakElement(array));