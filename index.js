'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
};
mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

const q = require('./src/lib/publisher.js');
global.Q = new q();

setInterval(() => {
  Q.publish('database', 'update', {id:55});
}, 10000*Math.random());
setInterval(() => {
  Q.publish('database', 'create', {id:55});
}, 10000*Math.random());
setInterval(() => {
  Q.publish('database', 'destroy', {id:55});
}, 10000*Math.random());

require('./src/app.js').start(process.env.PORT);
