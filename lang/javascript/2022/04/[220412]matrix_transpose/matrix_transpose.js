function transpose(matrix) {
  return matrix.reduce( (r, a, i) => a.forEach( (v, j) => r[j][i] = a[j]) || r, Array.from({length: matrix[0].length}).map( () => []));
}