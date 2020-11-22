function waveSort(arr) {
  for(let i=0; i<arr.length; i++) {
    if(i%2 === 0) {
      if(arr[i] <= arr[i+1]) {
        arr[i] += arr[i+1];
        arr[i+1] = arr[i]-arr[i+1];
        arr[i] -= arr[i+1];
      }
    } else {
      if(arr[i] >= arr[i+1]) {
        arr[i+1] += arr[i];
        arr[i] = arr[i+1]-arr[i];
        arr[i+1] -= arr[i];
      }
    }
  }
}