let transpose = function(matrix) {
    let result = []
 for (let i = 0; i < matrix[0].length; i++) {
   let inner = []
   for (let j = 0; j < matrix.length; j++) {
     inner.push(matrix[j][i]);
   }
   result.push(inner);
 }
 return result;
};