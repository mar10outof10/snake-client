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

const handleUserInput = connection => {
  process.stdin.on('data', key => {
    if (key === '\u0003') {
      process.exit();
    } else if (key === 'w') {
      connection.write('Move: up');
    } else if (key === 's') {
      connection.write('Move: down');
    } else if (key === 'a') {
      connection.write('Move: left');
    } else if (key === 'd') {
      connection.write('Move: right');
    }
  });
};

module.exports = { handleUserInput, setupInput };