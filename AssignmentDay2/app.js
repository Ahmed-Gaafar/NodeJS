var EventEmitter = require('events');
var util = require('util');

function Greetr(){
  this.greeting = 'Welcome';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(name){
  console.log(this.greeting);
  this.emit('greet',name)
}

var greet1 = new Greetr();

greet1.on('greet', function(data){
  console.log('some one greeting'+':'+data)
});

greet1.greet("Sara");