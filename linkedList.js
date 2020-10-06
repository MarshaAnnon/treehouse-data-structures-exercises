//Singly Linked List
class Node {
// an object for storing a single node of a linked list.
// Models 2 attributes - data & the link to the next node in the list
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }

}
// Linear data structure that stores values in nodes. The list maintains a reference to the first node, also called head. Each node points to the next node in the list
class SinglyLinkedList {
    constructor(head) {
        this.head = head;
        this.count = 0;
    }
    // Determines if the linked list is empty
    // Takes O(1) time
    isEmpty() {
        if (!node) {
            return null;
        } else {
            return this.node
        }
    }
    // Returns the length of the linked list
    // Takes O(1) time
    size() {
        let node = this.head;

        while (node) {
            count++
            node = node.next;
        }
        return this.count;
    }
}

// Doubly Linked List
class Node {
    constructor(data, prevNode = null, nextNode = null) {
        this.data = data;
        this.prevNode = prevNode;
        this.nextNode = nextNode;
    }
}

class DoublyLinkedList {
    constructor(head) {
        this.head = head;
        this.count = 0;
    }

    isEmpty() {
        if (!node) {
            return null;
        } else {
            return this.node
        }
    }

    size() {
        let node = this.head;

        while (node) {
            count++
            node = node.next;
        }
        return this.count;
    }

}
