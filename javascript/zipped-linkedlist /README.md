# zipped linked list
Write a function called zip lists
Arguments: 2 linked lists
Return: New Linked List, zipped as noted below
Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the the zipped list.
Try and keep additional space down to O(1)
You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Whiteboard Process
<!-- Embedded whiteboard image -->
![Alt text](./Screenshot%202023-06-24%20232634.png)

## Solution
<!-- Show how to run your code, and examples of it in action -->



```javascript
function zipLists(list1, list2) {
  if (list1.head === null) {
    return list2.head;
  }
  if (list2.head === null) {
    return list1.head;
  }

  let current1 = list1.head;
  let current2 = list2.head;
  const newList = new LinkedList();
  newList.head = current1;

  while (current1.next && current2) {
    const next1 = current1.next;
    const next2 = current2.next;

    current1.next = current2;
    current2.next = next1;

    current1 = next1;
    current2 = next2;
  }

  if (current2) {
    current1.next = current2;
  }

  return newList.head;
}

```