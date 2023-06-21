'use strict';
let Node = require('./node');
class linkedList{
    constructor(){
        this.head = null;
    };
    append(value){
        let node = new Node(value);
        if(!this.head){
            this.head = node;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            };
            current.next = node;
        };
    };

    kthFromEnd(k){
        let current = this.head;
        let counter = 0;
        while(current){
            current = current.next;
            counter++;
        }
        if(k>counter){
            return 'the value does not exist'
        }else if(k===counter){
            return this.head.value;
        }else{
            let current = this.head;
            for(let i=0; i<counter-k-1; i++){
                current = current.next;
            }
            return current.value;
        }
    };

    insertBefore(value, newVal){
        let node = new Node(newVal);
        if(!this.head){
            this.head = node;
        }else{
            let current = this.head;
            while(current){
                if(current.value===value){
                    break
                }else{
                    current = current.next;
                }
            }
            if(!current){
                return 'the value does not exist'
            }else if(current.value===this.head.value){
                node.next = this.head;
                this.head = node;
            }else{
                node.next = current;
                current = node;
            }
        }
    };
    insertAfter(value, newVal){
        let node = new Node(newVal);
        if(!this.head){
            this.head = node;
        }else{
            let current = this.head;
            while(current){
                if(current.value===value){
                    break
                }else{
                    current = current.next;
                }
            }
            if(!current){
                return 'the value does not exist'
            }else{
                node.next = current.next;
                current.next = node;
            }
        }
    };

}