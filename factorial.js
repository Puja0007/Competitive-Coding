

function getFactorial(num) {
    
    if(num === 0){
        return 1;
    }

   else{

     return getFactorial(num-1)*num;
   }
}

console.log(getFactorial(5));