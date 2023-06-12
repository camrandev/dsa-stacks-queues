/** Node: node for a stack. */

import { LinkedList } from "./linked-list";

// class Node {
//   val = null;
//   next = null;

//   constructor(val) {
//     this.val = val;
//   }
// }

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

export class Stack<T> {
  // top = null;
  // size = 0;
  private _list = new LinkedList<T>();

  get size(): number {
    return this._list.length;
  }

  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val: T): void {
    this._list.unshift(val);
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop(): T {
    return this._list.shift();
  }

  /** peek(): return the value of the top node in the stack. */

  peek(): T {
    return this._list.getAt(0);
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty(): boolean {
    return this.size === 0;
  }
}

module.exports = Stack;
