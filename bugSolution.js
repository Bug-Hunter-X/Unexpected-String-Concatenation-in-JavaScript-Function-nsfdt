function foo(a, b) {
  // Convert arguments to numbers
  a = Number(a);
  b = Number(b);

  // Check for NaN (Not a Number)
  if (isNaN(a) || isNaN(b)) {
    return "Invalid input: Arguments must be numbers";
  }

  return a + b;
}

console.log(foo(1, '2')); // Output: 3 (correct addition)
console.log(foo('1', 2)); // Output: 3 (correct addition)
console.log(foo('abc', 2)); //Output: Invalid input: Arguments must be numbers