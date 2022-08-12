function CeilElement(arr,n){
    let first = 0;
    let last = arr.length-1;
    let res =0;
    while(first<=last){
        let mid = Math.floor(first+(last-first)/2);

        if(arr[mid] == n){
            return arr[mid];
        }
        else if(arr[mid]<n){
            
            first = mid+1;
        }
        else if(arr[mid]>n){
            res = arr[mid];
            last = mid-1;
        }
    }
    return res;

}

let arr = [1,2,3,4,8,10,11,12,13,14,15];
console.log(CeilElement(arr,5));