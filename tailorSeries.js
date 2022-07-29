function tailorSeries(x,d){
    if(d===0){
        return 1;
    }
    else {
        return exponentFunction(x,d)/getFactorial(d) + tailorSeries(x,d-1);
    }
}

function exponentFunction(m,n){

    if(n ==0){
        return 1;
    }
    else{
        n--;
        return m * exponentFunction(m,n);
    }
}

function getFactorial(num) {
    
    if(num === 0){
        return 1;
    }

   else{

     return getFactorial(num-1)*num;
   }
}

console.log(tailorSeries(1,10));