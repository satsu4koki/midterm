function isLeapYear(yearInAD){
    let a = yearInAD % 4;
    let b = yearInAD % 100;
    let c = yearInAD % 400;
    if(a == 0 && c == 0){
        return "true"
    }
    if(a == 0 && b != 0){
        return "false"
    }
}