"use strict";
/** LLNode: node for a singly linked list. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var LLNode = /** @class */ (function () {
    function LLNode(val) {
        this.next = null;
        this.val = val;
    }
    return LLNode;
}());
/** LinkedList: chained together nodes. */
var LinkedList = /** @class */ (function () {
    function LinkedList(vals) {
        if (vals === void 0) { vals = []; }
        this.head = null;
        this.tail = null;
        this.length = 0;
        for (var _i = 0, vals_1 = vals; _i < vals_1.length; _i++) {
            var val = vals_1[_i];
            this.push(val);
        }
    }
    LinkedList.prototype.getNodeAt = function (idx) {
        if (idx < 0 || idx >= this.length) {
            throw new Error("index out of bounds");
        }
        var cur = this.head;
        var curIndex = 0;
        while (curIndex < idx) {
            cur = cur.next;
            curIndex++;
        }
        return cur;
    };
    /** push(val): add new value to end of list. */
    LinkedList.prototype.push = function (val) {
        var newLLNode = new LLNode(val);
        if (this.tail !== null) {
            this.tail.next = newLLNode;
        }
        this.tail = newLLNode;
        if (this.head === null) {
            this.head = newLLNode;
        }
        this.length++;
        // console.log("length: ", this.length);
    };
    /** unshift(val): add new value to start of list. */
    LinkedList.prototype.unshift = function (val) {
        var newLLNode = new LLNode(val);
        newLLNode.next = this.head;
        this.head = newLLNode;
        if (this.tail === null) {
            this.tail = newLLNode;
        }
        this.length++;
    };
    /** pop(): return & remove last item. */
    LinkedList.prototype.pop = function () {
        if (this.length === 0) {
            throw new Error("Cannot pop empty list");
        }
        if (this.length === 1) {
            var returnVal = this.tail.val;
            this.head = null;
            this.tail = null;
            this.length--;
            return returnVal;
        }
        var cur = this.head;
        var prev = null;
        while (cur.next !== null) {
            prev = cur;
            cur = cur.next;
        }
        var tailVal = this.tail.val;
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        return tailVal;
    };
    /** shift(): return & remove first item. */
    LinkedList.prototype.shift = function () {
        if (this.length === 0)
            throw new Error("the list is empty");
        if (this.length === 1) {
            var returnVal_1 = this.tail.val;
            this.head = null;
            this.tail = null;
            this.length--;
            return returnVal_1;
        }
        //grab the current head value
        var returnVal = this.head.val;
        this.head = this.head.next;
        this.length--;
        return returnVal;
    };
    /** getAt(idx): get val at idx. */
    LinkedList.prototype.getAt = function (idx) {
        if (idx >= this.length)
            throw new Error("invalid index");
        //count to track location by index
        var count = 0;
        //while the count is not equal to idx, increment it
        var curr = this.head;
        while (count != idx) {
            curr = curr.next;
            count++;
        }
        //return the node val
        return curr.val;
    };
    /** setAt(idx, val): set val at idx to val */
    LinkedList.prototype.setAt = function (idx, val) {
        if (idx >= this.length)
            throw new Error("invalid index");
        //count to track location by index
        var count = 0;
        var curr = this.head;
        while (count != idx) {
            curr = curr.next;
            count++;
        }
        curr.val = val;
    };
    /** insertAt(idx, val): add node w/val before idx. */
    LinkedList.prototype.insertAt = function (idx, val) {
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
            var newNode_1 = new LLNode(val);
            newNode_1.next = this.head;
            this.head = newNode_1;
            this.length++;
            return;
        }
        var prevNode = this.getNodeAt(idx - 1);
        var newNode = new LLNode(val);
        if (idx !== this.length) {
            newNode.next = prevNode.next;
        }
        else {
            this.tail = newNode;
        }
        prevNode.next = newNode;
        this.length++;
    };
    /** removeAt(idx): return & remove item at idx, */
    LinkedList.prototype.removeAt = function (idx) {
        if (idx < 0 || idx >= this.length) {
            throw new Error("index out of bounds");
        }
        if (this.length === 1) {
            var returnVal = this.head.val;
            this.head = null;
            this.tail = null;
            this.length--;
            return returnVal;
        }
        if (idx === 0) {
            var returnVal = this.head.val;
            this.head = this.head.next;
            this.length--;
            return returnVal;
        }
        var nodeBeforeTargetNode = this.getNodeAt(idx - 1);
        var targetNode = nodeBeforeTargetNode.next;
        var valToReturn = targetNode.val;
        nodeBeforeTargetNode.next = targetNode.next;
        this.length--;
        return valToReturn;
        //track current
    };
    /** average(): return an average of all values in the list */
    LinkedList.prototype.average = function () {
        var ll = this;
        if (ll.length === 0)
            return 0;
        var sum = 0;
        var curr = ll.head;
        while (curr) {
            sum = sum + curr.val;
            curr = curr.next;
        }
        return sum / ll.length;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
// module.exports = LinkedList;
