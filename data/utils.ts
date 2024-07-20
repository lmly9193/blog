export function tap(value, closure) {
  closure(value);
  return value;
}
