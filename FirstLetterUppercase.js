function capitalFirstLetter(string){
  var array = string.split(" ");
  var newArray = [];

  for(let i=0; i<array.length; i++){
      newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
  }
  return newArray.join(" ");
}
document.write(capitalFirstLetter('i love my india'));