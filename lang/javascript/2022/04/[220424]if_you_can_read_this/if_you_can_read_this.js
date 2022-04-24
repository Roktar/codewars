function to_nato(words) {
  return Array.from(words.toLowerCase().replace(/ /g, "")).map( v => NATO[v] || v ).join` `;
}