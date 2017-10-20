const {Connection, query} = require('stardog');

let conn;

module.exports.setupStardogConnection = () => {
  conn = new Connection({
    username: "admin",
    password: "admin",
    endpoint: "http://localhost:5820",
  });
};

module.exports.executeSparql = sparql => {
  return query.execute(conn, "osnm", sparql);
};
