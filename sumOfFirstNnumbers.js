let sum1 = 0;

function sum(n){

    if(n>0){
        sum1 = sum1+n;
        sum(n-1);
    }
    return sum1;
}

console.log(sum(3));