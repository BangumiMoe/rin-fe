import routes from "./routes.json";

export function get(name) {
  return routes[name];
}

export function build(name, params, query) {
  return get(name).replace(/:(\w+)/g, (_, name) => (
    encodeURIComponent(params[name] || "")
  )) + (query ? "?" + Object.keys(query).map(name => (
    encodeURIComponent(name) + "=" + encodeURIComponent(query[name])
  )).join("&") : "");
}
