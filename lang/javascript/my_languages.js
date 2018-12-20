var _ = require("underscore");

function myLanguages(results) {
  return Object.values(results).reduce( (arr, v, i) => (v >= 60 ? _.chain(arr).push([i, v]).value() : arr ), []).sort( (a, b) => b[1] - a[1] ).reduce( (arr, v, i, o, keys=Object.keys(results)) => _.chain(arr).push(keys[v[0]]).value(), []);
}