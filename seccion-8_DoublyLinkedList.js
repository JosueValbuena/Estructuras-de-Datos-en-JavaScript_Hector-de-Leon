class Node {
    constructor(value) {
        this.value = value,
            this.next = null,
            this.prev = null
    };
};

class DoublyLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    };

    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0
    };

    add(value) {
        this.length++;
        const node = new Node(value);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            if (this.head.next === null) {
                this.head.next = node;
            }
        };
    };

    print() {
        let current = this.head;

        console.log({
            cabeza: this.head,
            cola: this.tail
        });

        while (current !== null) {
            console.log({
                valor: current.value,
                prev: current.prev?.value,
                next: current.next?.value
            })
            current = current.next;
        };
    };

    delete(value) {
        if (this.length === 0) return;

        if (this.head.value === value) {
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            };

            this.length--;
        } else if (this.tail.value === value) {
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
        } else {
            let current = this.head;

            while (current.next !== null) {
                if (current.next.value === value) {
                    current.next = current.next.next;
                    current.next.prev = current

                    this.length--;
                    break;
                };

                current = current.next;
            };
        };
    };

    reverse() {
        let current = this.tail;

        while (current !== null) {
            console.log({
                valor: current.value,
                prev: current.prev?.value,
                next: current.next?.value
            });

            current = current.prev;
        };
    };
};

const doubleLinkedList = new DoublyLinkList();

doubleLinkedList.add('value1');
doubleLinkedList.add('value2');
doubleLinkedList.add('value3');
doubleLinkedList.print();
doubleLinkedList.add('value4');
doubleLinkedList.add('value5');
doubleLinkedList.delete('value3');
doubleLinkedList.print();
doubleLinkedList.reverse();

/* 
    estado inicial
            list:{
                head:{
                    value: value1,
                    next: null,
                    prev: null
                },
                tail:{
                    value: value1,
                    next: null,
                    prev: null
                }
            }

            add(value2)

            node:{
                value: value2;
                next:null;
                prev:null
            }

            paso 1 (linea this.tail.next = node;)

            list:{
                head:{
                    value: value1,
                    next: null,
                    prev: null
                },
                tail:{
                    value: value1,
                    next: {
                        value: value2,
                        next: null
                        prev: null
                    },
                    pre: null
                }
            }

            paso 2 (linea node.prev = this.tail;)

            node: {
                value: value2;
                next: null;
                prev:{
                    value: value1,
                    next: {
                        value: value2,
                        next: null
                        prev: null
                    },
                    pre: null
                }
            }
            
            paso 3 (linea this.tail = node;)
            list:{
                head:{
                    value: value1,
                    next: null,
                    prev: null
                },
                tail:{
                    value: value2;
                    next: null;
                    prev:{
                        value: value1,
                        next: {
                            value: value2,
                            next: null
                            prev: null
                        },
                        pre: null
                    }
                }
            }
            */