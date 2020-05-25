// TITLES is a preloaded array of String to search throught

function search(searchTerm) {
  var search = new RegExp(searchTerm, 'i'); // change option "gi" => "i"
  
  return TITLES.filter(function(title, i) {
    return search.test(title);
  });
}