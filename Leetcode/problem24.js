function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var swapPairs = function (head) {
    let first = head;
    let second = head.next;

    let prev = null;
    while(second){
        if(prev){
            prev.next = second;
        }
        first.next = second.next;
        second.next = first;
        if(!prev){
            head = second;
        }
        prev = first;

        first = first.next;
        second = first ? first.next : null;
    }
    return head;
};

let linkedList = new ListNode(1);
// linkedList.next = new ListNode(2);
// linkedList.next.next = new ListNode(3);
//linkedList.next.next.next = new ListNode(4);
//linkedList.next.next.next.next = new ListNode(5);
//linkedList.next.next.next.next.next = new ListNode(6);

module.exports = () => swapPairs(linkedList);
