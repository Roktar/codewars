function getConsectiveItems(items, key) {
  if(!isNaN(parseInt(items)))
    items = String(items);
  return ((items.match(new RegExp(`(?=${key})${key}*`, 'g'))||[]).sort( (a, b) => b.length - a.length)[0]||'').length;
}