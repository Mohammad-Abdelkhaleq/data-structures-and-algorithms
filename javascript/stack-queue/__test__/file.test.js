"use strict";
// let node=require('../src/node.js');
let stack=require('../stack.js');
let queue=require('../queue.js');

describe('stack',()=>{
    it ('can successfully push onto a stack',()=>{
        let s=new stack();
        s.push(1);
        expect(s.top.data).toEqual(1);
    });
    it ('can successfully push multiple values onto a stack',()=>{
        let s=new stack();
        s.push(1);
        s.push(2);
        expect(s.top.data).toEqual(2);
    });
    it ('can successfully pop off the stack',()=>{
        let s=new stack();
        s.push(1);
        s.push(2);
        s.pop();
        expect(s.top.data).toEqual(1);
    });
    
    it ('can check if the stack is empty',()=>{
        let s=new stack();
        expect(s.isEmpty()).toEqual(true);
    });
    it ('can successfully peek the next item on the stack',()=>{
        let s=new stack();
        s.push(1);
        s.push(2);
        expect(s.peek().data).toEqual(2);
    });
});


describe('queue',()=>{
    it ('can successfully enqueue into a queue',()=>{
        let q=new queue();
        q.enqueue(1);
        expect(q.front.data).toEqual(1);
        expect(q.back.data).toEqual(1);
    });
    it ('can successfully enqueue multiple values into a queue',()=>{
        let q=new queue();
        q.enqueue(1);
        q.enqueue(2);
        expect(q.front.data).toEqual(1);
        expect(q.back.data).toEqual(2);
    });
    it ('can successfully dequeue out of a queue the expected value',()=>{
        let q=new queue();
        q.enqueue(1);
        q.enqueue(2);
        q.dequeue();
        expect(q.front.data).toEqual(2);
    } );
    it ('can successfully peek into a queue, seeing the expected value',()=>{
        let q=new queue();
        q.enqueue(1);
        q.enqueue(2);
        expect(q.peek().data).toEqual(1);
    } );
});