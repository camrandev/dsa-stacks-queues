/** LLNode: node for a singly linked list. */

class LLNode<T> {
  val: T;
  next: LLNode<T> | null = null;

  constructor(val: T) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList<T> {
  head: LLNode<T> | null = null;
  tail: LLNode<T> | null = null;
  length = 0;

  constructor(vals: T[] = []) {
    for (let val of vals) this.push(val);
  }

  getNodeAt(idx: number): LLNode<T> {
    if (idx < 0 || idx >= this.length) {
      throw new Error("index out of bounds");
    }

    let cur = this.head!;
    let curIndex = 0;
    while (curIndex < idx) {
      cur = cur.next!;
      curIndex++;
    }

    return cur;
  }

  /** push(val): add new value to end of list. */

  push(val: T): void {
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

  unshift(val: T): void {
    const newLLNode = new LLNode(val);
    newLLNode.next = this.head;
    this.head = newLLNode;

    if (this.tail === null) {
      this.tail = newLLNode;
    }

    this.length++;
  }

  /** pop(): return & remove last item. */

  pop(): T {
    if (this.length === 0) {
      throw new Error("Cannot pop empty list");
    }

    if (this.length === 1) {
      const returnVal: T = this.tail!.val;

      this.head = null;
      this.tail = null;
      this.length--;
      return returnVal;
    }

    let cur = this.head!;
    let prev = null;

    while (cur.next !== null) {
      prev = cur;
      cur = cur.next;
    }

    const tailVal = this.tail!.val;
    this.tail = prev;
    this.tail!.next = null;

    this.length--;

    return tailVal;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.tail === null) throw new Error("the list is empty");

    if (this.length === 1) {
      const returnVal = this.tail.val;

      this.head = null;
      this.tail = null;
      this.length--;
      return returnVal;
    }

    //grab the current head value
    const returnVal = this.head!.val;
    this.head = this.head!.next;
    this.length--;

    return returnVal;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx: number) {
    if (idx >= this.length) throw new Error("invalid index");
    //count to track location by index
    let count = 0;

    //while the count is not equal to idx, increment it
    let curr = this.head;
    while (count != idx) {
      curr = curr!.next;
      count++;
    }

    //return the node val
    return curr!.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx: number, val: T): void {
    if (idx >= this.length) throw new Error("invalid index");
    //count to track location by index
    let count = 0;

    let curr = this.head;
    while (count != idx) {
      curr = curr!.next;
      count++;
    }

    curr!.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx: number, val: T): void {
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
    } else {
      this.tail = newNode;
    }
    prevNode.next = newNode;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx: number) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("index out of bounds");
    }

    if (this.length === 1) {
      const returnVal = this.head!.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return returnVal;
    }

    if (idx === 0) {
      const returnVal = this.head!.val;
      this.head = this.head!.next;
      this.length--;
      return returnVal;
    }

    const nodeBeforeTargetNode = this.getNodeAt(idx - 1);
    const targetNode = nodeBeforeTargetNode.next;
    const valToReturn = targetNode!.val;

    nodeBeforeTargetNode.next = targetNode!.next;
    this.length--;

    return valToReturn;

    //track current
  }

  /** average(): return an average of all values in the list */

  average() {
    const ll = (this as LinkedList<number>);
    if (ll.length === 0) return 0

    let sum = 0;
    let curr = ll.head;
    while (curr) {
      sum = sum + curr.val;
      curr = curr.next
    }

    return sum/ll.length
  }
}

module.exports = LinkedList;
