module.exports = function getZerosCount(number, base) {
  let arr = getSimpleMn(base);
  let  res = Number.MAX_VALUE;
  for (let i = 0; i<arr.length;i++){
    let mn = arr[i];
    let c= getMaxPow(number, mn);
    res = Math.min(c,res);
  }
  return res;

}

function getSimpleMn(x){
  let arr = [];
  if(x > 0 && x != 1){
  for(let i = 2; i <= x; i++){
    while(x % i == 0 && x > 1){
      arr.push(i);
      x = x / i;
    }
      if(x/i == 1){
        arr.push(x);
      }
    }
  return arr;
  } else if(x == 1){
    return 1;
  }
  return []
}

function getMaxPow(n,p){
  let i=1;
  let acc = 0;
  while(true){
    let x = Math.floor(n/Math.pow(p,i));
    if (x<=0){
      break;
    } else {
      acc+=x;
    }
    
    i++;
  }
  return acc;

}
