const hexToBase64 = hex => [...hex].map( v => getIntValue(v).toString(2).padStart(4, '0') ).join``.replace(/[0-9]{1,6}/g, v => base64Table[parseInt(v.padEnd(6, '0'), 2)] + "=".repeat(v.length%3));
const getIntValue = c => ({'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15 }[c] || +c);
const base64Table = {...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'};