function truncate(str, maxlength){
  if(str.length>maxlength){
    return str.substring(0,str.length=maxlength)+'...';
  }
  else {
    return str;
  }
}
console.log(truncate('Ось, що мені хотілося б сказати на цю тему:',100));
