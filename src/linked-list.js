const Node = require('./node');


  class LinkedList {
    constructor() {
      this.length = 0 ;
      this._head = null;
      this._tail = null;

    }

    append(data) {
      var node = new Node(data);

      if(this.length){
        this._tail.next = node;
        node.prev = this._tail;
        this._tail = node;
      }
      else{
        this._head = node;
        this._tail = node;
      }
      this.length++;
      return this;
    }

    head() {return this._head.data;}

    tail() {return this._tail.data; }

    at(index) {


        var count = 0;
        var node = this._head

        while(count != index){
          node = node.next;
          count++;
        }
        return node.data;

    }

    insertAt(index, data) {

      if(this.length == 0 ){
        var node = new Node(data);
        this._head = node;
        this._tail = node;
      }
      else if(index == this.length){
        this.append(data);
      }
      else {
        var count = 0;
        var node = this._head

        while(count != index){
          node = node.next;
          count++;
        }
        node.data = data;
      }
      this.length++;
    }

    isEmpty() {return this.length==0;}

    clear() {
      if(this.length!=0){
        this._head.data =null;
        this._tail.data = null;
        this.length = 0;
      }
      else {
        return this;
      }
      return this;
    }

    deleteAt(index) {

      if(index == 0){
        node = new Node()
        this._head = this._head.next;
        if(this._head != null){
          this._head.prev = null;
        }
        this.length--;
        return this;

      }
      if(index == this.length - 1){
        this._tail = this.tail.prev;
        if(this._tail != null){
          this._tail.next = null;
        }
        this.length--;
        return this;
      }
      var count = 0;
      var node = this._head
      while(count != index){
        node = node.next;
        count++;
      }
      node.prev.next = node.next;
      node.next.prev = node.prev;
      this.length--;

      return this;
    }

    reverse() {
      var node = this._tail.prev;
      var count = 1;
      this._tail.next = null;
      this._tail.prev = null;
      this._head = this._tail;

      while(count < this.length){
        this._tail.next = node;
        node = node.prev;
        this._tail.next.prev = this._tail;
        this._tail = this._tail.next;
        count++;
      }

      this._tail.next = null
      return this;
    }

    indexOf(data) {
      var index = 0;
      var node = this._head

      while(index < this.length && node.data != data){
        node = node.next;
        index++;
      }
      if(index == this.length){
        return -1;
      }
      else{
        return index;
      }
    }

}

module.exports = LinkedList;
