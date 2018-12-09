import { get } from "https";

//36z5xrsy98pq7x53p9bewqsn
const fetchUtils = (options = {}) => {
  const defaults = {
    url: null,
    test: null,
    mode: "cors",
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  };

  const settings = { ...defaults, ...options };

  const init = () => {
    initFetch();
  };

  const initFetch = () => {
    fetch(settings.url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json; charset=utf-8"
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer"
    }) // no-referrer, *client)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });
  };

  init();
};

export default fetchUtils;
