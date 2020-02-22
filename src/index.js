
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let arr = [];

  if(matrix === undefined || matrix.length == 0) {
    
    return arr

  } else {
    
    matrix.forEach((item, i) => {
        i % 2 === 1 ? arr.push(item.reverse()) : arr.push(item);
      }
    );

    return arr.reduce((acc, val) => acc.concat(val));
    
  }
}
