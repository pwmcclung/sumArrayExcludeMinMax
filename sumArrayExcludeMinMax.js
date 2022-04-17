function sumArray(array) {
  if (!Array.isArray(array) || array.length == 0 || array.length <= 2){
    return 0
  }
 let sum = 0;
  let min = Math.min(...array);
  let max = Math.max(...array);
  for (let i = 0; i<array.length; i++){
    sum += array[i]
  

  }
   return ((sum - max) - min)
}
