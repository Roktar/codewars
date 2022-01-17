function alphabetPosition(text) {
  return [...text.toLowerCase().replace(/[^a-z]+/g, "")].map( v => v.charCodeAt()-96 ).join` `;
}