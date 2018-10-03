var _ = require("underscore");

var getLength = function(data) {
  return data.length;
}
var isEmpty = function(a, b) {
  return getLength(a) < 0 || getLength(b) < 0; 
}
var equals = function(a, b) {
  return a === b;
}
var falsecase = function(a, b) {
  return _.reject(a, (v1, i, d) => {
    if( equals(_.find(b, (v2, i, d) => equals(v1, v2)), v1))
      return true;
    return false;
  });
}
function array_diff(a, b) {
  return (isEmpty(a, b) ? _.identity(a) : falsecase(a, b));
}

