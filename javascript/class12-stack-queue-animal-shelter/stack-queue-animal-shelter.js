'use strict'

let mynode = require('./node.js');
class animalShelter{
    constructor(){
        this.front = null;
        this.back = null;
        this.length = 0;
    };
    isEmpty(){
        if(this.front == null){
            return true;
        }
        return false;
    }

    enqueue(type,name){
        let node = new mynode(type,name);
        if(this.isEmpty()){
            this.front = node;
            this.back = node;
            this.length++;
            return;
        }
        this.back.next = node;
        this.back = node;
        this.length++;


    }

    dequeue(pref){
        if(this.isEmpty()){
            return null;
        }
        if(pref != 'cat' && pref != 'dog'){
            return null;
        }
        if(pref == 'cat' && this.front.animalSpecies == 'cat'){
            let temp = this.front;
            this.front = this.front.next;
            temp.next = null;
            this.length--;
            return temp;
        }
        if(pref == 'dog' && this.front.animalSpecies == 'dog'){
            let temp = this.front;
            this.front = this.front.next;
            temp.next = null;
            this.length--;
            return temp;
        }
        let current = this.front;
        while(current.next){
            if(current.next.animalSpecies == pref){
                let temp = current.next;
                current.next = current.next.next;
                temp.next = null;
                this.length--;
                return temp;
            }
            current = current.next;
        }


    }
}

module.exports = animalShelter;