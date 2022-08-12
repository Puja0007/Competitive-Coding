function searchElementRotatedSortedArr(arr,num){

    let first = 0;
    let last = arr.length-1;
    let N = arr.length;
    while(first<=last){
        let mid = Math.floor(first + (last-first)/2);
        let next = (mid+1)% N;
        let prev = (mid-1+N)% N;

        if(arr[mid]<=arr[next] && arr[mid]<=arr[prev]){
            let a1 = binarySearch(arr,0,mid-1,num);
            let a2 = binarySearch(arr,mid+1,arr.length-1,num);
            if(a1>0){
                return a1;
            }
            else if(a2>0){
                return a2;
            }
            else{
                return -1;
            }

        }
        else if(arr[mid]<=arr[first]){
            last = mid-1;
        }
        else if(arr[mid]>=arr[last]){
            first = mid+1;
        }
    }
    return -1;
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

let arr =[15, 18, 2, 3, 6, 12];
console.log(searchElementRotatedSortedArr(arr,7));