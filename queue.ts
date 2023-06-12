const linkedList = require("./linked-list");
/** Node: node for a queue. */

// class QNode<T> {
//   val: T | null = null;
//   next: T | null = null;

//   constructor(val) {
//     this.val = val;
//   }
// }

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue<T> {
  _list = new LinkedList<T>();
  // first = null;
  // last = null;
  // size = 0;

  get first(): T | null {
    return this._list.head?.val || null;
  }

  get last(): T | null {
    return this._list.tail?.val || null;
  }

  get size(): number {
    return this._list.length;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {}

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {}

  /** peek(): return the value of the first node in the queue. */

  peek() {}

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {}
}

module.exports = Queue;
