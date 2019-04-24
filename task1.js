function myFunct(str){
  let yourString = str;
  yourString = yourString.replace(yourString.charAt(0),yourString.charAt(0).toUpperCase());
  return yourString;
}
console.log(myFunct('yura'));
