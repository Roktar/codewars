function sortAnimal(animals) {
  return Array.from(animals).sort( (a, b) => a.numberOfLegs-b.numberOfLegs ).sort( (a, b) => a.numberOfLegs == b.numberOfLegs ? a.name.localeCompare(b.name) : 0);
}