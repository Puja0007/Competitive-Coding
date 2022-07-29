function validAnagarm(str1,str2){
    if(str1.length != str2.length){
        return false;
    }
    frequencyObj1 = {};
    frequencyObj2 ={};

    for(let i=0; i<str1.length; i++){
        frequencyObj1[str1.charAt(i)] = frequencyObj1[str1.charAt(i)] ? frequencyObj1[str1.charAt(i)] + 1 : 1;
    }

    for(let i=0; i<str2.length; i++){
        frequencyObj2[str2.charAt(i)] = frequencyObj2[str2.charAt(i)] ? frequencyObj2[str2.charAt(i)] + 1 : 1;
    }

    console.log(frequencyObj1,frequencyObj2)
    let count = 0;
    for(let i=0; i<str1.length; i++){
        if(frequencyObj1[str1.charAt(i)] == frequencyObj2[str1.charAt(i)]){
            count++;
        }
    }
    if(count == str1.length){
        return true;
    }
    else{
        return false;
    }
}

console.log(validAnagarm("cinema","iceman"));