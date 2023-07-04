let node = require('./node.js');
class stack{
    constructor(){
        this.top = null;
        this.length = 0;
    };
    push(value){
        let newNode = new node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
        return this;
    };
    pop(){
       if(this.length === 0) {return null};
         let temp = this.top;
            this.top = this.top.next;
            temp.next = null;
            this.length--;
            return temp.value;

    };
    peek(){
        if(this.length === 0) {return null};
        return this.top;
    };
    isEmpty(){
        if(this.length === 0) {return true};
        return false;
    };
}

module.exports = stack;