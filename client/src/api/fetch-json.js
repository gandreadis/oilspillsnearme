import fetch from "isomorphic-fetch";

function fetchJSON(route) {
  return fetch(window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + route)
    .then(response => response.json());
}

export default fetchJSON;
