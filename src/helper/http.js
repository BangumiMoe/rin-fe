function checkStatus(response) {
  if(response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    error.status = response.status;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

export function request(method, url, body = null) {
  const options = {
    method,
    credentials: "include"
  };
  if(body) {
    options.body = JSON.stringify(body);
  }
  return fetch(url, options).then(checkStatus).then(parseJSON);
}

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
