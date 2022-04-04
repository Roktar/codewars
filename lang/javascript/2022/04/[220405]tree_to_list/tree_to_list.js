function treeToArray (tree) {
  let q = [], arr = [];
  if(tree.children) {
    q.push(...tree.children);
    arr.push(tree.data);
  }
  
  while(q.length) {
    let node = q.shift();
    arr.push(node.data);
    
    for(let i=0; i<node.children.length; i++) 
      q.push(node.children[i]);
  }
  
  return arr;
}