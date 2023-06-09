'use strict';
const node = require('./node');
class LinkedList {
   
    constructor() {
        this.head = null;
    }

    insert(data){
        let newNode = new node(data);
        if (this.head === null){
            this.head = newNode;
        }else{
            let current = this.head;
            while (current.next){
                current = current.next;
            }
            current.next = newNode;
            
        }
    }

    includes(data){
        if (this.head === null){
            return 'false';
        }else{
            let current = this.head;
            while (current){
                if (current.data === data){
                    return 'true';
                }
                current = current.next;
            }
            return 'false';
        }

    }


    toString(){
        let string = '';
        if (this.head === null){
            return 'the list is empty';
    }else{
        let current = this.head;
        while (current){
            string += `{${current.data}} -> `;
            current = current.next;
        }
        return string += 'NULL';
    }}

}
module.exports = LinkedList;
