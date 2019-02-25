'use strict';
require('dotenv').config()
let io = require('socket.io-client');
const util = require ('util');

class Publisher {
  constructor(){
    let PORT = process.env.Q_SERVER;
    console.log(`publisher on port: ${PORT}`);
    this.emitter = io.connect(`${process.env.Q_SERVER}`);
  }

  publish(namespace, room, payload){
    console.log(`Publisher: namespace: ${namespace}, room: ${room}, payload:${payload}`);
    this.emitter.emit('publish', namespace, room, payload);
  }
}

module.exports = Publisher;
