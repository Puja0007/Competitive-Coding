function MinimumDifference(arr,n){
    let first = 0;
    let last = arr.length-1;
  
    while(first<=last){
        let mid = Math.floor(first+(last-first)/2);

        if(arr[mid]==n){
            return arr[mid]-n;
        }

        else if(arr[mid]<n){
            first = mid+1;
        }
        else if(arr[mid]>n){
            last = mid-1;
        }
    }
   return Math.min(Math.abs(arr[first]-n),Math.abs(arr[last]-n));
 
}

let arr = [1,3,8,10,15];
console.log(MinimumDifference(arr,12));