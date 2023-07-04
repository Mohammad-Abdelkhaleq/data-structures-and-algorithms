let stackQueuePsudo=require('./stack-queue-pseudo.js');
let stack=require('./stack.js');
let node=require('./node.js');

let x=new stackQueuePsudo();

x.enqueue(1);
x.enqueue(2);
x.enqueue(3);
x.dequeue();