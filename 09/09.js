function gcd(naturalA, naturalB){
     let result = 1;
    let i = 2;
    let end = Math.min(naturalA, naturalB);
    while(i <= end){
        let amariA = naturalA % i;
        let amariB = naturalB % i;
        if(amariA == 0 && amariB == 00){
            result = i;
        }
        i = i + 1;
    }
    return result;
}

