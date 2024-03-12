// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 
// Example 1:


//ONLY for leetcode editor

/*
  Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }


  @param {ListNode} l1
  @param {ListNode} l2
  @return {ListNode}
*/

var addTwoNumbers = function(l1, l2, carry =0) {
    if(!l1&&!l2&&!carry) return null;
    
    var total = (l1?l1.val:null)+(l2?l2.val:null)+carry
    carry = Math.floor(total/10);
    sum = total%10;
    let newNode = new ListNode(sum);
    const l1Next = l1?l1.next:null
    const l2Next = l2?l2.next:null

   newNode.next =  addTwoNumbers(l1Next,l2Next,carry);
    return newNode
    };



// To run in a local editor use the below code

// Definition for singly-linked list.
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

var addTwoNumbers = function(l1, l2,carry=0) {
    if(!l1&&!l2&&!carry) return null;
    
    var total = (l1?l1.val:null)+(l2?l2.val:null)+carry
    carry = Math.floor(total/10);
    sum = total%10;
    let newNode = new ListNode(sum);
    const l1Next = l1?l1.next:null
    const l2Next = l2?l2.next:null

   newNode.next =  addTwoNumbers(l1Next,l2Next,carry);
    return newNode
};

// Helper function to convert array to linked list
function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
    let result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Example usage:
let l1 = arrayToLinkedList([2, 4, 3]);
let l2 = arrayToLinkedList([5, 6, 4]);

let result = addTwoNumbers(l1, l2);
console.log(linkedListToArray(result)); // Output: [7, 0, 8]

