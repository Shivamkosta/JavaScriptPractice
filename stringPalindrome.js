function checkPalindrome(str){
    //convert string to an array
    const arrayValues = string.split("");

    //reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    //convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString){
        document.write("It is palindrome");
        document.write('Palindrome length is :'+string.length);
    }
    else{
        document.write("It is not a palindrome");
    }

}
//take input from user
const string = prompt("Enter a string :");
checkPalindrome(string);