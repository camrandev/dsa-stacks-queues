"use strict";
// const LinkedList = require("./linked-list");
/** Node: node for a queue. */
Object.defineProperty(exports, "__esModule", { value: true });
const linked_list_1 = require("./linked-list");
// class QNode<T> {
//   val: T | null = null;
//   next: T | null = null;
//   constructor(val) {
//     this.val = val;
//   }
// }
/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */
class Queue {
    constructor() {
        this._list = new linked_list_1.LinkedList();
    }
    // first = null;
    // last = null;
    // size = 0;
    get first() {
        var _a;
        return ((_a = this._list.head) === null || _a === void 0 ? void 0 : _a.val) || null;
    }
    get last() {
        var _a;
        return ((_a = this._list.tail) === null || _a === void 0 ? void 0 : _a.val) || null;
    }
    get size() {
        return this._list.length;
    }
    /** enqueue(val): add new value to end of the queue. Returns undefined. */
    enqueue(val) {
        this._list.push(val);
    }
    /** dequeue(): remove the node from the start of the queue
     * and return its value. Should throw an error if the queue is empty. */
    dequeue() {
        return this._list.shift();
    }
    /** peek(): return the value of the first node in the queue. */
    peek() {
        return this.first;
    }
    /** isEmpty(): return true if the queue is empty, otherwise false */
    isEmpty() {
        return this.size === 0;
    }
}
module.exports = Queue;
