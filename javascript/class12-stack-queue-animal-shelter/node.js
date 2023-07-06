class node{
    constructor(type,name){
        this.animalSpecies = type;
        this.animalName = name;
        this.next = null;
    }
}

module.exports = node;