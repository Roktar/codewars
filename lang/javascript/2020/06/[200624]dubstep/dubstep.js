function songDecoder(song){
  return song.split(/WUB/g).filter( v => v != '').join(" ");
}