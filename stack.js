"use strict";
/** Node: node for a stack. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var linked_list_1 = require("./linked-list");
// class Node {
//   val = null;
//   next = null;
//   constructor(val) {
//     this.val = val;
//   }
// }
/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */
var Stack = /** @class */ (function () {
    function Stack() {
        // top = null;
        // size = 0;
        this._list = new linked_list_1.LinkedList();
    }
    Object.defineProperty(Stack.prototype, "size", {
        get: function () {
            return this._list.length;
        },
        enumerable: false,
        configurable: true
    });
    /** push(val): add new value to the top of the stack. Returns undefined. */
    Stack.prototype.push = function (val) {
        this._list.unshift(val);
    };
    /** pop(): remove the node from the top of the stack
     * and return its value. Should throw an error if the stack is empty. */
    Stack.prototype.pop = function () {
        return this._list.shift();
    };
    /** peek(): return the value of the top node in the stack. */
    Stack.prototype.peek = function () {
        return this._list.getAt(0);
    };
    /** isEmpty(): return true if the stack is empty, otherwise false */
    Stack.prototype.isEmpty = function () {
        return this.size === 0;
    };
    return Stack;
}());
exports.Stack = Stack;
// module.exports = Stack;
