"use strict";
let mynode=require('./node.js');
class stack{
    constructor(data){
        this.top = null;
        this.length = 0;
    };
    isEmpty(){
        if(this.top == null){
            return true;
        }
        return false;
    };
    push(data){
        let node = new mynode(data);
        node.next = this.top;
        this.top = node;
        this.length++;
    };
    pop(){
        if(this.isEmpty()){
            return null;
        }
        let temp = this.top;
        this.top = this.top.next;
        this.length--;
        return temp;
    };
    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.top;
    };

}
module.exports = stack;