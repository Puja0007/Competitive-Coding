function NextAlphabet(arr,ch){
    let first = 0;
    let last = arr.length-1;
    let res = "#";

    while(first<=last){
        let mid = Math.floor(first+(last-first)/2);
        if(arr[mid] == ch){
            first = mid+1;
        }
        else if(arr[mid]>ch){
            res = arr[mid];
            last = mid-1;
        }
        else if(arr[mid]<ch){
            first = mid+1;
        }
    }
    return res;
}

let arr = ["a","b","c","f","h"];

console.log(NextAlphabet(arr,"a"));