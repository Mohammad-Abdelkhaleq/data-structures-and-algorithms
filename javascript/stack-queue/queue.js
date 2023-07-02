'use strict';
let mynode=require('./node.js');
class queue{
    constructor(data){
        this.front = null;
        this.back = null;
        this.length = 0;
    };
    isEmpty(){
        if(this.front == null){
            return true;
        }
        return false;
    };
    enqueue(data){
        let node = new mynode(data);
        if(this.isEmpty()){
            this.front = node;
            this.back = node;
            this.length++;
            return;
        }
        this.back.next = node;
        this.back = node;
        this.length++;
    };
    dequeue(){
        if(this.isEmpty()){
            return null;
        }
        let temp = this.front;
        this.front = this.front.next;
        this.length--;
        return temp;
    };
    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.front;
    };

}

module.exports = queue;