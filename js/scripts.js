var isPalindrome = function(word) {
  var lowerCaseWord = word.toLowerCase();
  var wordArray = lowerCaseWord.split(""); // turn string in array
  reversedArray = wordArray.reverse(); // make new array with reverse
  reversedString = reversedArray.join(""); // make string of reversed array
  if (word.toLowerCase() === reversedString){ // compare the two strings
    return true // return true or false
  } else {
    return false
  }
}

$(document).ready(function(){
  $("#palindromeForm").submit(function(event){
    event.preventDefault();
    var word = $("input#word").val();
    if (isPalindrome(word)) {
      $(".yes").text(word + " is ");
    } else {
      $(".no").text(word + " is not ");
    }
    $("#response").show();
  });
});
