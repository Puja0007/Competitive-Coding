
function fibonacciSeries(n) {
   if(n ==1){
       return 1;
   }
   else if(n == 0){
       return 0;
   }
   else {
    return fibonacciSeries(n-1)+ fibonacciSeries(n-2);
   }
}

console.log(fibonacciSeries(6));