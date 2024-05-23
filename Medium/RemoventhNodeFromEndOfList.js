/*
19. Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next= head
    let right =dummy
    let left=dummy
    for(let i=0;i<n;i++){
        right=right.next
    }

    while(right.next!== null){
       right= right.next
        left =left.next
    }
    left.next = left.next.next
    return dummy.next
};

//Not required for leetcode

// Clear ListNode

class ListNode{
    constructor(data=0,next=null){
        this.data=data;
        this.next=next
    }
}

//Helper function to convert array to linkedlist

function arrayToList(array){
    let dummy = new ListNode();
    let current = dummy
    for(let val in array){
        current.next=new ListNode(val)
        current =current.next
    }
    return dummy.next
}

// Helper function tp convert LinkedList to Array

function listToArray(head){
    let arr=[]
    while(head!==null){
        arr.push(head.val)
        head=head.next
    }
    return arr
}
let head = arrayToList([1,2,3])
console.log(head)
let n=1
head=removeNthFromEnd(head,2)
console.log(head)
console.log(listToArray(head))