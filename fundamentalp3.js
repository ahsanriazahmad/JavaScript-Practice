function add7(userinput) {
  let number = userinput;
  return number + 7;
}

function multiply(userinput1, userinput2) {
  let product = userinput1 * userinput2;
  return product;
}

function capitalize(userinput) {
  //a string and returns that string with only the first letter capitalized
  //Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
  let str = userinput;
  let strL = userinput.length;
  let cap = str.charAt(0).toUpperCase();
  let newword = userinput.slice(1, strL).toLowerCase();
  let result = cap + newword;
  return result;
}
