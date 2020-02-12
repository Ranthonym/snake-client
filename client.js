const net = require('net');


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
    console.log("Successfully connected to game server");
    conn.write("Name: RAM");
    // setTimeout(() => { 
    //   conn.write("Move: up" );
  
    // }, 1000);
    // setTimeout(() => { 
    //   conn.write("Move: up" );
  
    // }, 2000);
    // setTimeout(() => { 
    //   conn.write("Move: up" );
  
    // }, 3000);
    // setTimeout(() => { 
    //   conn.write("Move: up" );
  
    // }, 4000);
    // setTimeout(() => { 
    //   conn.write("Move: up" );
  
    // }, 5000);
    // setTimeout(() => { 
    //   conn.write("Move: left" );
  
    // }, 6000);
    // setTimeout(() => { 
    //   conn.write("Move: left" );
  
    // }, 7000);
    // setTimeout(() => { 
    //   conn.write("Move: left" );
  
    // }, 8000);
    // setTimeout(() => { 
    //   conn.write("Move: up" );
  
    // }, 9000);
    // setTimeout(() => { 
    //   conn.write("Move: up" );
  
    // }, 10000);
    // setTimeout(() => { 
    //   conn.write("Move: up" );
  
    // }, 11000);

  });
  
  // function to attach an event handler to handle incoming data and console log it for the player.
  conn.on('data', (data) => {
    console.log('game says: ', data);
  });



  return conn;
}

module.exports =  connect;