let illegalRegEx = /[^0-9()-\s]/g;
let numsOnlyRegEx = /[0-9]/g;
function telephoneCheck(str) {
  if (illegalRegEx.test(str) == true){
    return false;
  }
  if (str.match(numsOnlyRegEx).length < 10 ||str.match(numsOnlyRegEx).length > 11){
    return false;
  }
  if (str.match(numsOnlyRegEx).length == 11 && (/^1[\s|(]/).test(str) == false) {
    return false;
  }
  if ((/[()]/g).test(str) == true){
    if (str.match(/[()]/g).length!=2){
      return false;
    }
    if ((/[(][0-9]{3}[)]/g).test(str) == false){
      return false;
    }
    if ((/-/g).test(str) == false){
      return false;
    }
  }
  if ((/^[0-9]\s/).test(str) == true){
    if ((/^1[\s|(]/).test(str) == false){
      return false;
    }
  }
  return true;
}

//telephoneCheck("555-555-5555");
telephoneCheck("1(555)555-5555")
