class linkedList{
    constructor(){
        this.head = null;
    }
    insert(value){
        this.head = new Node(value, this.head);
    }
    includes(value){
        let current = this.head;
        while(current){
            if(current.value === value){
                return true;
            }
            current = current.next;
        }
        return false;
    }
    toString(){
        let current = this.head;
        let string = '';
        while(current){
            string += `{ ${current.value} } -> `;
            current = current.next;
        }
        string += 'NULL';
        return string;
    }

    
}

class Node{
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}

class Hashmap{
    constructor(size){
        this.size = size;
        this.storage = new Array(size);
    }

    hash(key){
        let hash = key.split('').reduce((acc, cur)=>{
            return acc + cur.charCodeAt(0);
        }, 0) * 19 % this.size;
        return hash;
    }

    add(key, value){
        let hash = this.hash(key);
        if(!this.storage[hash]){
            this.storage[hash] = new linkedList();
        }
        this.storage[hash].insert({[key]:value});

    }

    get(key){
        let hash = this.hash(key);
        if(this.storage[hash]){
            let current = this.storage[hash].head;
            while(current){
                if(Object.keys(current.value)[0] === key){
                    return current.value[key];
                }
                current = current.next;
            }
        }
        return null;
    }

    has(key){
        let hash = this.hash(key);
        if(this.storage[hash]){
            let current = this.storage[hash].head;
            while(current){
                if(Object.keys(current.value)[0] === key){
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }

    keys(){
        let keys = [];
        for(let i = 0; i < this.storage.length; i++){
            if(this.storage[i]){
                let current = this.storage[i].head;
                while(current){
                    keys.push(Object.keys(current.value)[0]);
                    current = current.next;
                }
            }
        }
        return keys;
    }

    value(key){
        let hash = this.hash(key);
        if(this.storage[hash]){
            let current = this.storage[hash].head;
            while(current){
                if(Object.keys(current.value)[0] === key){
                    return Object.values(current.value)[0];
                }
                current = current.next;
            }
        }
        return null;
    }
}

let hashmap = new Hashmap(4000);
hashmap.add('name', 'Ahmad');
hashmap.add('one', '1');


console.log(hashmap.get('name'));
console.log(hashmap.get('one'));


console.log(hashmap.has('name'));
console.log(hashmap.has('one'));

console.log(hashmap.keys());

console.log(hashmap.value('name'));




