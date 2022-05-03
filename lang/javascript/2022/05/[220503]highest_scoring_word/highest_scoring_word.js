function high(x){
  return x.split` `.map((v, i) => [v, [...v].reduce( (t, v2) => t+=v2.charCodeAt(0)-96, 0)]).sort( (a, b) => b[1]-a[1] )[0][0];
}