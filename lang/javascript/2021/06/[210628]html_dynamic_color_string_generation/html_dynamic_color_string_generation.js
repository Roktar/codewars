let values = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const generateColor = () => ['#'].concat( Array.from({length:6}).map(() => values[(Math.random()*15).toFixed(0)])).join``