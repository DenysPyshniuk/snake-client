const net = require('net')
const { IP, PORT } = require("./constants");
const connect = function() {
  const conn = net.createConnection({
    IP: "135.23.222.131",
    PORT: 50542,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: DVP");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
  });
  conn.on('data', (data) => {
    conn.write(data);
    console.log(data);
  });
  return conn;
};

module.exports = {connect};