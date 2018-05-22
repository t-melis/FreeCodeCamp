

function confirmEnding(str, target) {
  var val = /a-zA-Z+/;
  var myStr = str.replace(val);
  var targetLength = target.length;
  var myStrLength = myStr.length;
  if (myStr.substring(myStrLength-targetLength) === target){
    return true;
  }
  else{
    return false;
  }

}


confirmEnding("Welcome to the jungle", "ungle");
