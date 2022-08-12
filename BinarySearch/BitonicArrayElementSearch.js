function BitonicArrayElement(arr,el) {
    let first = 0;
    let last = arr.length-1;
    let n = arr.length;
        while(first <= last){
            let mid = Math.floor(first +(last-first)/2);
            let next = (mid+1) % n;
            let prev = (mid-1+n)% n;
           // console.log(mid);
           if(arr[0] == el){
            return 0;
         }
else if(arr[n-1] == el){
            
                 return n-1;
             
         }
           else if(arr[mid] == el){
               return mid;
           }
            else if(mid>0 && mid<n-1){
                if(arr[prev]<arr[mid] && arr[next]<arr[mid]){
                    let a1 = BinarySearch(arr,0,prev,el);
                    let a2 = BinarySearch(arr,next,arr.length-1,el);
                    if(a1>0){
                        return a1;
                    }
                    else{
                        return a2;
                    }
                    
                }
                else if(arr[prev]>arr[mid]){
                    last= mid-1;
                    
                }
               else{
                    first= mid+1;
                }
            }
    
            
            
        }
        return -1;
    }
    


    function BinarySearch(arr,first,last,elm){
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
    

    let array = [1,3,8,12,4,2];
    console.log(BiotonicArrayElement(array,12));