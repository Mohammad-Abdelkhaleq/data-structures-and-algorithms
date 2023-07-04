let node = require('./node.js');
let stack = require('./stack.js');

class stackQueuePsudo{
    constructor(){
        this.stack1 = new stack();
        this.stack2 = new stack();
    };
    enqueue(value){
      while(!this.stack1.isEmpty()){
            this.stack2.push(this.stack1.pop());

      }
        this.stack1.push(value);
        while(!this.stack2.isEmpty()){
            this.stack1.push(this.stack2.pop());
        }

        console.log(this.stack1);

    };
    dequeue(){
        console.log("hello from dequeue");
        if(this.stack1.isEmpty()) {console.log("empty")}else{
        console.log(`this IS THE POPPED VALUE ${this.stack1.pop()}`);
    
        }
    };



}

module.exports = stackQueuePsudo;