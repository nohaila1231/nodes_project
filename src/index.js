export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('add(2, 3):', add(2, 3));
  console.log('multiply(4, 5):', multiply(4, 5));
}
