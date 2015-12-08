export function escape(strings, ...values) {
  return strings[0] + values.map((value, index) => (
    encodeURIComponent(value) + strings[index + 1]
  )).join("");
}
