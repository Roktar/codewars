// #1
function compose() {
  let args = Array.from(arguments);
  let r = 0;
  
  return function(v) {
    return args.reduceRight( (t, f, i) => !f ? v : (v=f(v) ), v);
  }
}

// #2
const compose = (...funcs) => v => funcs.reduceRight( (t, f, i) => !f ? v : (v=f(v)), v);