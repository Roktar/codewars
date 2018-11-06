function diagonalSum(matrix){
    return matrix.reduce( (t, arr, i) => t+=arr[i], 0);
}