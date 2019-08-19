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