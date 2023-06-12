"use strict";
/** LLNode: node for a singly linked list. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class LLNode {
    constructor(val) {
        this.next = null;
        this.val = val;
    }
}
/** LinkedList: chained together nodes. */
class LinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        for (let val of vals)
            this.push(val);
    }
    getNodeAt(idx) {
        if (idx < 0 || idx >= this.length) {
            throw new Error("index out of bounds");
        }
        let cur = this.head;
        let curIndex = 0;
        while (curIndex < idx) {
            cur = cur.next;
            curIndex++;
        }
        return cur;
    }
    /** push(val): add new value to end of list. */
    push(val) {
        const newLLNode = new LLNode(val);
        if (this.tail !== null) {
            this.tail.next = newLLNode;
        }
        this.tail = newLLNode;
        if (this.head === null) {
            this.head = newLLNode;
        }
        this.length++;
        // console.log("length: ", this.length);
    }
    /** unshift(val): add new value to start of list. */
    unshift(val) {
        const newLLNode = new LLNode(val);
        newLLNode.next = this.head;
        this.head = newLLNode;
        if (this.tail === null) {
            this.tail = newLLNode;
        }
        this.length++;
    }
    /** pop(): return & remove last item. */
    pop() {
        if (this.length === 0) {
            throw new Error("Cannot pop empty list");
        }
        if (this.length === 1) {
            const returnVal = this.tail.val;
            this.head = null;
            this.tail = null;
            this.length--;
            return returnVal;
        }
        let cur = this.head;
        let prev = null;
        while (cur.next !== null) {
            prev = cur;
            cur = cur.next;
        }
        const tailVal = this.tail.val;
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        return tailVal;
    }
    /** shift(): return & remove first item. */
    shift() {
        if (this.length === 0)
            throw new Error("the list is empty");
        if (this.length === 1) {
            const returnVal = this.tail.val;
            this.head = null;
            this.tail = null;
            this.length--;
            return returnVal;
        }
        //grab the current head value
        const returnVal = this.head.val;
        this.head = this.head.next;
        this.length--;
        return returnVal;
    }
    /** getAt(idx): get val at idx. */
    getAt(idx) {
        if (idx >= this.length)
            throw new Error("invalid index");
        //count to track location by index
        let count = 0;
        //while the count is not equal to idx, increment it
        let curr = this.head;
        while (count != idx) {
            curr = curr.next;
            count++;
        }
        //return the node val
        return curr.val;
    }
    /** setAt(idx, val): set val at idx to val */
    setAt(idx, val) {
        if (idx >= this.length)
            throw new Error("invalid index");
        //count to track location by index
        let count = 0;
        let curr = this.head;
        while (count != idx) {
            curr = curr.next;
            count++;
        }
        curr.val = val;
    }
    /** insertAt(idx, val): add node w/val before idx. */
    insertAt(idx, val) {
        if (idx < 0 || idx > this.length) {
            throw new Error("index out of bounds");
        }
        if (this.length === 0) {
            this.head = new LLNode(val);
            this.tail = this.head;
            this.length++;
            return;
        }
        if (this.length === 1) {
            this.head = new LLNode(val);
            this.head.next = this.tail;
            this.length++;
            return;
        }
        if (idx === 0) {
            const newNode = new LLNode(val);
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            return;
        }
        const prevNode = this.getNodeAt(idx - 1);
        const newNode = new LLNode(val);
        if (idx !== this.length) {
            newNode.next = prevNode.next;
        }
        else {
            this.tail = newNode;
        }
        prevNode.next = newNode;
        this.length++;
    }
    /** removeAt(idx): return & remove item at idx, */
    removeAt(idx) {
        if (idx < 0 || idx >= this.length) {
            throw new Error("index out of bounds");
        }
        if (this.length === 1) {
            const returnVal = this.head.val;
            this.head = null;
            this.tail = null;
            this.length--;
            return returnVal;
        }
        if (idx === 0) {
            const returnVal = this.head.val;
            this.head = this.head.next;
            this.length--;
            return returnVal;
        }
        const nodeBeforeTargetNode = this.getNodeAt(idx - 1);
        const targetNode = nodeBeforeTargetNode.next;
        const valToReturn = targetNode.val;
        nodeBeforeTargetNode.next = targetNode.next;
        this.length--;
        return valToReturn;
        //track current
    }
    /** average(): return an average of all values in the list */
    average() {
        const ll = this;
        if (ll.length === 0)
            return 0;
        let sum = 0;
        let curr = ll.head;
        while (curr) {
            sum = sum + curr.val;
            curr = curr.next;
        }
        return sum / ll.length;
    }
}
exports.LinkedList = LinkedList;
// module.exports = LinkedList;
