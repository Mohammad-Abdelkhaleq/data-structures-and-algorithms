'use strict'
let animalShelter = require('./stack-queue-animal-shelter.js');

let shelter = new animalShelter();

shelter.enqueue('dog','jorge w bush');
shelter.enqueue('cat','jevara');
shelter.enqueue('dog','musuleni');
shelter.enqueue('cat','hiitler');

console.log(shelter.dequeue('cat'));
console.log(shelter.dequeue('dog'));
console.log(shelter.dequeue('zombie racoon'));
console.log(shelter.dequeue('amer'));