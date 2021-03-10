const net = require('net');

/*
  *Established connection with game server
  */
const { connect } = require('./client')

const handleUserInput = () => {
  process.stdin.on('data', key => {
    if (key === '\u0003') {
      process.exit();
    }
  });
}

// Setup user interface
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  handleUserInput();

  return stdin;
};

console.log('Connecting ...');
connect();
setupInput();

