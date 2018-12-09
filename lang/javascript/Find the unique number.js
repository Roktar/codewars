var _ = require("lodash");

function findUniq(arr) {
  let obj = _.countBy(arr), values = Object.values(obj);
  
  return parseFloat(Object.keys(obj)[ values[0] <= values[1] ? 0 : 1 ]);
}
