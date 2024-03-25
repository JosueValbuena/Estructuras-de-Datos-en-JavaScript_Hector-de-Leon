// Implementacion de una lista enlazada

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    };
};

class LinkedList {

    constructor() {
        this.head = null
    };

    add(value) {
        const node = new Node(value);

        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            }

            current.next = node;
        }
    };

    print() {
        let current = this.head;

        while (current !== null) {
            console.log(current.value);
            current = current.next;
        };
    };

    size() {
        let count = 0;
        let current = this.head;

        while (current !== null) {
            count++;
            current = current.next;
        };

        console.log(count);
    };

    clear() {
        this.head = null
    };

    delete(value) {
        if (this.head.value === value) {
            this.head = this.head.next
        } else {
            let current = this.head;

            while (current.next !== null) {
                if (current.next.value === value) {
                    current.next = current.next.next
                    break;
                }

                current = current.nextu
            }
        };
    };
};

const linkedList = new LinkedList();

linkedList.add('Element-1');
linkedList.add('Element-2');
linkedList.add('Element-3');
linkedList.print();
linkedList.size();
linkedList.delete('Element-2');
linkedList.print();
linkedList.size();
linkedList.add('Element-4');
linkedList.add('Element-5');
console.log(linkedList)

//notas graficas

/* 
para agregar o eliminar elementos, primer se debe verificar el elemento head existe o es el valor que hara alguna accion.

if(this.head === value || this.head === null){
 logica
}else{
 logica
}

agregar un elemento y no existen elementos en la lista.

head sera igual al un nodo el nodo se compone de

nodo: {
    value: value,
    next: null
};

si agregado un nuevo elemento y ya existe un elemento anterior,

nodo: {
    value: value1,
    next: {
        value: value2
        next: null
    }
}

eliminar un elemento

value2

nodo:{
    value: value1, (no es el elemento a eliminar),
    next: {
        value: value2, (si es el elemento a eliminar)
        next: null
    }
}

posicionandose en un nodo, se evalua si el valor del siguiente nodo es el valor a eliminar,
si es asi, etonces si sustituye el valor de next del nodo actual con el valor next del siguiente nodo
que en este ejemplo quedaria

nodo:{
    value: value1, (no es el elemento a eliminar),
    next: null
}

en caso de haber otro elemento en la lista, pasaria de 

nodo:{
    value: value1, (no es el elemento a eliminar),
    next: {
        value: value2, (si es el elemento a eliminar)
        next: {
            value: value3,
            next: null
        }
    }
}

a

nodo:{
    value: value1,
    next: {
        value: value3,
        next: null
    }
}

*/