"use strict";
/** Node: node for a stack. */
Object.defineProperty(exports, "__esModule", { value: true });
const linked_list_1 = require("./linked-list");
// class Node {
//   val = null;
//   next = null;
//   constructor(val) {
//     this.val = val;
//   }
// }
/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */
class Stack {
    constructor() {
        // top = null;
        // size = 0;
        this._list = new linked_list_1.LinkedList();
    }
    get size() {
        return this._list.length;
    }
    /** push(val): add new value to the top of the stack. Returns undefined. */
    push(val) {
        this._list.unshift(val);
    }
    /** pop(): remove the node from the top of the stack
     * and return its value. Should throw an error if the stack is empty. */
    pop() {
        return this._list.shift();
    }
    /** peek(): return the value of the top node in the stack. */
    peek() {
        return this._list.getAt(0);
    }
    /** isEmpty(): return true if the stack is empty, otherwise false */
    isEmpty() {
        return this.size === 0;
    }
}
module.exports = Stack;
