function exponentFunction(m,n){

    if(n ==0){
        return 1;
    }
    else{
        n--;
        return m * exponentFunction(m,n);
    }
}

console.log(exponentFunction(2,3));