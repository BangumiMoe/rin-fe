const reISODate = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+(?:Z|(?:\+|-)\d{2}:\d{2})$/;

export function parse(string) {
  return JSON.parse(string, (key, value) => (
    typeof value == "string" && reISODate.test(value) ? new Date(value) : value
  ));
}

export const stringify = JSON.stringify;
