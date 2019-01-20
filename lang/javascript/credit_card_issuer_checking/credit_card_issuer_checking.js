function getIssuer(number) {
  let card_issuers = { addCardIssuer : function(key, data) { this[key] = data; } };
  let card_number = number.toString(10);
  let card_issuer = "";

  card_issuers.addCardIssuer("AMEX", { type : /^34|^37/, length : 15 });
  card_issuers.addCardIssuer("Discover", { type : /^6011/, length : 16 });
  card_issuers.addCardIssuer("Mastercard", { type : /^51|^52|^53|^54|^55/, length : 16 });
  card_issuers.addCardIssuer("VISA", { type : /^4/, length : [13, 16] });
  
  for(let key in card_issuers)
    if( card_issuer = find(card_number, card_issuers[key], key)) break;
  
  return (!card_issuer ? "Unknown" : card_issuer);
}
function find(n, obj, key) {
  if(n.match(obj.type)) {
    if(Array.isArray(obj.length)) {
      for(let len of obj.length)
        if(n.length === len) return key;
    } else if(n.length === obj.length) return key;
  } else
    return null;
}