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

