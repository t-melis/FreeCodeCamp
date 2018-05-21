

function findLongestWord(str) {
  var myStr = str.split(' ');
  var longestWord = myStr[0];
  for (var i = 1; i < myStr.length; i++){
    if (myStr[i].length > longestWord.length){
      longestWord = myStr[i];
    }
  }
  return longestWord.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
