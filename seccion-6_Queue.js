//Cola: lista de elementos donde el primero que llega, es el primero que sale.

class Queue {
    #items = [];

    enqueue(item) {
        return this.#items.push(item);
    };
    dequeue() {
        return this.#items.shift();
    }
    size() {
        return this.#items.length;
    };
    peek() {
        return this.#items[0];
    };
    print() {
        return [...this.#items];
    };
    clear() {
        return this.#items = [];
    };
    isEmpty() {
        return this.#items.length === 0
    }
};

const queue = new Queue();

queue.enqueue('Element1');
queue.enqueue('Element2');
queue.enqueue('Element3');

console.log(queue.size());

console.log(queue.isEmpty());

console.log(queue.print());

console.log(queue.peek());

queue.dequeue();

console.log(queue.peek());

console.log(queue.print());

queue.clear();

console.log(queue.isEmpty());