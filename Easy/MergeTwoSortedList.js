/*
21. Merge Two Sorted Lists
Easy
Topics
Companies
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


//To Run In VS CODE
var mergeTwoLists = function(list1, list2) {
    let curr = new ListNode()
    let dummy = curr
    while(list1 && list2){
        if(list1.data <list2.data){
            curr.next=list1
            list1=list1.next
        }else{
            curr.next=list2
            list2=list2.next
        }
        curr=curr.next
    }

    if(list1){curr.next=list1}
    if(list2){curr.next=list2}
   
    return dummy.next

};

class ListNode{
    constructor(value=0,next=null){
        this.data=value
        this.next=next
    }
}
var arrayToList=function(list){
    let dummy = new ListNode();
    let current =dummy;
    for(let value of list){
        current.next = new ListNode(value);
        current=current.next
    }
    return dummy.next
}

var ListToArray=function(head){
    let arr=[]
    while(head!==null){
        arr.push(head.data)
        head=head.next
    }
    return arr
}

let list1 = [1,2,4]
let list2 = [1,3,4]
let head = mergeTwoLists(arrayToList(list1),arrayToList(list2))
console.log(ListToArray(head))


// For Leet Code

var mergeTwoLists = function(list1, list2) {
    let curr = new ListNode()
    let dummy = curr
    while(list1 && list2){
        if(list1.data <list2.data){
            curr.next=list1
            list1=list1.next
        }else{
            curr.next=list2
            list2=list2.next
        }
        curr=curr.next
    }

    if(list1){curr.next=list1}
    if(list2){curr.next=list2}
   
    return dummy.next

};
