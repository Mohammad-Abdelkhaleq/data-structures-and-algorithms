'use strict';

// Require our linked list implementation
const LinkedList = require('../src/linked-list');

describe('Linked List', () => {
  it('create a linked list', () => {
    let ll = new LinkedList();
    expect(ll.head).toBeNull();
  });
  it('insert into the linked list', () => {
    let ll = new LinkedList();
    ll.insert(1);
    expect(ll.head.data).toEqual(1);
    ll.insert(2);
    expect(ll.head.next.data).toEqual(2);
    ll.insert(3);
    expect(ll.head.next.next.data).toEqual(3);
  });

  it('includes method return true if the value is found in the linked list', () => {
         let ll = new LinkedList();
          ll.insert(1);
         ll.includes(1);
         expect(ll.includes(1)).toEqual('true');
  });
  it('includes method return false if the value is not found in the linked list', () => {
          let ll = new LinkedList();
          expect(ll.includes(2)).toEqual('false');
  });
   
  it('toString method return a string representing all the values in the Linked List', () => {
    let ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    expect(ll.toString()).toEqual('{1} -> {2} -> {3} -> NULL');
  });

});
