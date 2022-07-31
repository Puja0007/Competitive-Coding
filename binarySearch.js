function binarySearch(arr,n){
 let min =0;
 let max = arr.length-1;
 while(min <= max){
    let midVal = Math.floor(min +(max-min)/2);
   
    let currentVal = arr[midVal];
    if(n >currentVal){
        min = midVal+1;
       
    } 
    else if(n<currentVal) {
        max = midVal-1;
    }
    else{
        return midVal;
    }
 }

 return -1;
}

let arr = [1,2,3,4,5,11];
console.log(binarySearch(arr,11));