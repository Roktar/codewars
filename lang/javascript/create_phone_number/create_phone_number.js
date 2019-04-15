function createPhoneNumber(numbers) {
  let pre = numbers.splice(0, 3).join(""), mid = numbers.splice(0, 3).join(""), suf = numbers.splice(0).join("");
  return `(${pre}) ${mid}-${suf}`;
}