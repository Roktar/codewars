const menuList = Object.freeze(['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke']);

function getOrder(input) {
  let result = [];
  
  for(let menu of menuList )
    (input.match(new RegExp(menu, "gi")) || []).forEach( (v, i) => result.push(v) );
    
  return result.map( v => v.replace(/[a-z]/, v => v.toUpperCase()) ).join` `;
}