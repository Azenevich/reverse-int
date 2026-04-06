module.exports = function reverse(number) {
  const newNumber = Math.abs(number);
  const arr = newNumber.toString().split('').map(Number);
  return Number(arr.reverse().toString().replace(/,/g, ''));
};
