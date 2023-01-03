function changer(str) {
  return str.replace(/[a-zA-Z]/g, v => String.fromCharCode(97+(v.toLowerCase().charCodeAt(0)%97+1)%26)).replace(/[aeiou]/g, v => v.toUpperCase());
}