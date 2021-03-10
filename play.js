const net = require('net');

/*
  *Established connection with game server
  */
const { connect } = require('./client')

console.log('Connecting ...');
connect();