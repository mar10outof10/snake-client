const { commands } = require('./constants.js');

let connection;

// Setup user interface
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  handleUserInput(connection);

  return stdin;
};

const handleUserInput = (connection) => {
  process.stdin.on('data', key => {
    if (key === '\u0003') {
      process.exit();
    }
    connection.write(commands[key]);
  });
};

module.exports = { handleUserInput, setupInput };