function extractCurrencyValue(str){
  return str.split('$').join('');
}
console.log(extractCurrencyValue('vrieubv3v $120 vne9b4bv $30'));
