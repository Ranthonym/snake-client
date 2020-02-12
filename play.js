const net = require('net');
console.log('Connecting ...');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.0.236',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('connected to game');
  })
  // function to attach an event handler to handle incoming data and console log it for the player.
  conn.on('data', (data) => {
    console.log('game says: ', data);
  });



  return conn;
}

// console.log('Connecting ...');
connect();
