

function repeatStringNumTimes(str, num) {
  var myStr = '';
  if (num < 0){
    return "";
  }
  else{
    for (var i = 0; i < num; i++){
      myStr += str;
    }    
    }
  return myStr;
}

repeatStringNumTimes("wtf do i type", 3);
