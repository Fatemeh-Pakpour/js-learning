function isDiagonalMatrix(matrix){
    for(let i = 0; i <matrix.length; i++ ){
        for(let j = 0; j < matrix.length; j++ ){
            if(i !== j && matrix[i][j] !== 0){
                return false
            }    
        }    
    }
    return true;

}
console.log(isDiagonalMatrix([[1, 0, 0], [0, 5, 0], [0, 0, 3] ])); 
console.log(isDiagonalMatrix([[1, 0, 0], [0, 5, 0], [2, 0, 3] ])); 

const previousLess = [];
function arrayPreviousLess(items) {
    let firstElement = -1;
for (let i = 0 ; i <= items.length-1; i++) {
    if (firstElement < items[i]){
        previousLess.push(firstElement);
    }
    else {
        previousLess.push(-1);
    }
    firstElement = items[i]
}
}
arrayPreviousLess([3, 5, 2, 4, 5]); 
//  [-1, 3, -1, 2, 4]
console.log(previousLess); 

function hailstoneSequence(n) {
  const sequence = [];

  while (n != 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = n * 3 + 1;
    }

    sequence.push(n);
  }

//   return sequence.join("=>");
return sequence.length;  
}
console.log(hailstoneSequence(18));


function properOrImproper(a) {
  for(const item of a ){
   if (item !== 0 && item >= 10 && item <= -10){
    return "proper a"
   }
  }
   if ( a[0] / a[1] < 1 && a[0] / a[1] > 0 ){
    return "Proper"
   }
   else{
    return "Improper"
   }
  }
 
  console.log(properOrImproper([-2,3]));


/**
 *Given an integer product, find the smallest positive (i.e. greater than 0) 
 integer the product of whose digits is equal to product. If there is
  no such integer, return -1 instead.
 * 
 * @param {*} product => that is the number
 * @returns
 */
function digitsProduct(product) {
  if(product == 0) return 10;
  if(product == 1) return 1;
  let digits = "";
  for( let divisor = 9; divisor > 1; divisor--) {
      while(product % divisor == 0) {
          product =  product/divisor;
          digits = divisor.toString()+ digits;
      }
  }
  
  if(product > 1) return -1;
  
  return parseInt(digits, 10)
}

console.log(digitsProduct( 450));