function greetDevelopers(list) {
  return list.map( v => !(v["greeting"] = `Hi ${v.firstName}, what do you like the most about ${v.language}?`) || v );
}