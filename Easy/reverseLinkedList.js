/*
206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000

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
 * @return {ListNode}
 */

function ListNode(value,next=null){
    return {value,next}
}

const reverseList = function(head){
    let current = head
    let prev = null

    while(current!==null){
        let nextNode = current.next
        current.next=prev
        prev = current
        current = nextNode
    }
    return prev
}


let head = ListNode(1,ListNode(2,ListNode(3,ListNode(4))));

let rev = reverseList(head)
let result =''
while(rev!==null){
    result +=rev.value+"->"
    rev= rev.next
}

console.log(result+"null")