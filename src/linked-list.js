const Node = require('./node');

class LinkedList {
    constructor() {
        this._tail = new Node();
        this._head = new Node();
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);
        if(this.length === 0){
            this._tail = node;
            this._head = node;
        }else{
            node.prev = this._tail;
           this._tail.next = node;
          this._tail = node;    
        }
        this.length++;
        return this;
    }

    head() {
        
    return this._head === null ? this._head : this._head.data;
    }

    tail() {
        return this._tail === null ? this._tail : this._tail.data;
    }

    at(index) {
        let point = this._head;
        for(let i = 0; i < index; i++)
        point = point.next;
        return point.data;

    }

    insertAt(index, data) {
        let node = new Node(data);
        let current  = this._head;
        if(index === 0){
           node.next = this._head;
           this._head.prev = node;
           this._head = node;
        }else{
            for (let i = 1; i < index; i++)
            current = current.next;
        node.next = current.next;
        node.prev = current;
        current.next.prev = node;
        current.next = node;
        }
        this.length++;
        return this;

    }

    isEmpty() {
        return !(this.length);
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        return this;
    }

    deleteAt(index) {
    
         
         
    if (index === 0) {
        this._head.prev = null;
      this._head = this._head.next;
    }else if (index === this.length - 1) {
       
        this._tail = this._tail.prev;
        this._tail.next = null;
      }else{
        let current = this._head;
        for (let i = 1; i < index; i++)
        current = current.next;
        current.next.prev = current.prev;
        current.prev.next = current.next;
    }
    this.length++;
    return this;

 }
    reverse() {
        let curr = this._head;
    let prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      curr.prev = next;
      prev = curr;
      curr = next;
    }
    this._tail = this._head;
    this._head = prev;
    return this;
    }

    indexOf(data) {
        let i = 0;
        let pointer = this._head;
        while (i < this.length && data != pointer.data) {
            i++;
            pointer = pointer.next;
        }
        if (i == this.length)
            i = -1;
        return i;
    }
}

module.exports = LinkedList;
