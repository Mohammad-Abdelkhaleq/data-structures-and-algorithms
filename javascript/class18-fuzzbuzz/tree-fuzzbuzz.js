const node = require("./node");

class binarryTree{
    constructor(){
        this.root = null;
    }
    preOrder() {
        let result = [];
        let traverse = (node) => {
            result.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
    inOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            result.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
    postOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root);
        return result;
    }
}

class binarySearch extends binaryTree {
    constructor(){
        super();
    }

    add(value){
        let node = new Node(value);
        if (!this.root) {
            this.root = node;
            return this;
        }
        let current = this.root;
        while (current) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = node;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = node;
                    return this;
                }
                current = current.right;
            }
        }
    }


    contains(value){
        if (!this.root) return false;
        let current = this.root;
        while (current) {
            if (value === current.value) return true;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    maximumValue(){
        let max = 0;
        let traverse = (node) => {
            if (node.value > max) {
                max = node.value;
            }
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return max;
    }

    // breadthFirst(){
    //     let result = [];
    //     let level=0;
    //     let pointer = this.root;
    //     let traverse = (node) => {
    //         if (node.left||node.right) {
    //             result.push(node.value);
    //             level++;
    //             if(node.left){
    //                 pointer = node.left;
    //                 traverse(pointer);
    //             }
    //             if(node.right){
    //                 pointer = node.right;
    //                 traverse(pointer);
    //             }
    //         }
           
    //     }
    //     traverse(this.root);
    //     return result;
    // }


    breadthFirst(){
        let result = [];
        let queue = [];
        let current = this.root;
        queue.push(current);
        while(queue.length){
            current = queue.shift();
            result.push(current.value);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        return result;
    }


    
    
}

function oddNumbers() {
    let result = [];
    let traverse = (node) => {
        if(node.value%2!==0){
            result.push(node.value);
        }
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
}

function fuzzbuzz(){
    
    let traverse = (node) => {
        if(node.value%3===0&&node.value%5===0){
            node.value = "fuzzbuzz";
        }else if(node.value%3===0){
            node.value = "fuzz";
        }else if(node.value%5===0){
            node.value = "buzz";
        }else{
            node.value = node.value.toString();
        }
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
}