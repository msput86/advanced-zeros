module.exports = function getZerosCount(number, base) {
  //https://math.stackexchange.com/questions/226868/number-of-trailing-zeros-in-a-factorial-in-base-b
  let arr = getSimpleMn(base);
  let arr1 = {};
  arr.forEach(d=>{
    if (arr1[d]){
      arr1[d] = arr1[d]+1;
    } else {
        arr1[d] = 1;
    }
  });
  let  res = Number.MAX_VALUE;
  for (let key in arr1) {
    let power = arr1[key];
    let c= getMaxPow(number, key);
    res = Math.min(Math.floor(c/power),res);
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
