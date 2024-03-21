//Pila: coleccion de elementos donde el ultimo que entra, es el primero que sale.

//Estructura de una pila
class Stack {
    #items = [];

    push(item) {
        return this.#items.push(item);
    };
    pop() {
        return this.#items.pop();
    };
    print() {
        return [...this.#items];
    };
    peek() {
        return this.#items[this.#items.length - 1]
    };
    size() {
        return this.#items.length;
    };
    isEmpty() {
        return this.#items.length === 0;
    }
};

const stack = new Stack();

stack.push('Elemento1');
stack.push('Elemento2');
stack.push('Elemento3');

console.log(stack.print());

stack.pop();

console.log(stack.print());

console.log(stack.peek());

console.log(stack.size());

console.log(stack.isEmpty());