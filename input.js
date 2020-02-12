const connect  = require('./client');
// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });
   
  return stdin;
};

//function to convert each keyboard input into move commands sent to server
const  handleUserInput =  (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
       setTimeout(() => { 
       connection.write("Move: up" );
     }, 100);
    }
     if (key === 'a') {
      setTimeout(() => { 
      connection.write("Move: left" );
    }, 100);
  }
    if (key === 's') {
      setTimeout(() => { 
      connection.write("Move: down" ); 
    }, 100);
  }
    if (key === 'd') {
      setTimeout(() => { 
      connection.write("Move: right" )
    }, 100);
  }
 };
module.exports = setupInput;
