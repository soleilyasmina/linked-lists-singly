class Node {
  constructor(value) {
    
  }
  
}



class SinglyLinkedList{
  constructor() {
    
  }

  push(value) {
    
  }
  
  shift() {
   
  } 

  //Define a method pop() that doesn't take any aguments. If there are no nodes in the list, return undefined. Loop through the list until you reach the tail. Set the next property of the 2nd to last node to be null. Set the tail to be the 2nd to last node. Decrement the length of the list by 1. Return the value of the removed node. 
  pop() {
    
  }

  
  // Create a method unshift() that accepts an argument *value*. Create a new node using the the value passed to the function. If there is no head property on the list, set the head and tail to be the newly created node. Otherwise set the newly created node's next property on the list. Set the head propery on the list to be that newly created node. Increment the length by 1. Return the linked list.
  unshift(value) {
    
  }

  //Create a get() method that accepts one argument *index*. If this argument is less than zero or greater or equal to the length of the list, return null. Loop through the list untill reach the index and return the node at that specific index.
  get(index) {
   
  }

  //Use get() to find the specific node. and update the value passed in. If the node is not found, return false. If the node is found, set the value of tat node to be the value passed to the function and return true. 
  update(index,value) {
    
  }

  // If the index is less than zero or greater than the length, return false. If the index is the same as the length push a new node to the end of the list. If the index is 0, unshift a new node to the start of the list. Otherwise, using the get method access the node at the index -1. Set the next property on that node to be the new node.
  insert(index, value) {
    
  }

  //Remove 
  // If the index is less than zero or greater than the length return undefined. If the index is the same as the length-1, pop. If the index is 0, shift. Otherwise, usig the get method , access the node at the index-1. Set the next property on that node to be the next of the next node. 
  remove(index) {
    
  }

  //Swap the head and tail. Create a variable called next and create a variable called prev. Create a variable called node and initialize it to the head property. Loop through the list. Set next to be bext property on whatever node is.
  reverse() {

  }
}
