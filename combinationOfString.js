function combination(str){
    list_of_combination = new Array();
    for(let i=0; i<str.length; i++){
        for(let j=i+1; j<str.length; j++){
            list_of_combination.push(str.slice(i,j));
        }
    }
    return list_of_combination
}
document.write(combination("dog"));