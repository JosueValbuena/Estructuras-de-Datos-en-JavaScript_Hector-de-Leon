class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    };
};

class BinarySearchTree {
    constructor() {
        this.root = null
    };

    insert(value) {
        const node = new Node(value);

        if (this.root === null) {
            this.root = node;
            return
        };

        let current = this.root;

        while (true) {
            if (value === current) break;

            if (value < current.value) {
                if (current.left === null) {
                    current.left = node;
                    break;
                }
                current = current.left;
            } else {
                if (value > current.value) {
                    if (current.right === null) {
                        current.right = node;
                        break;
                    }

                    current = current.right;
                };
            };
        };
    };

    search(value) {
        if (this.root === null) return false;

        let current = this.root;
        let count = 0;

        while (current) {
            console.log({ pasos: ++count });
            if (value === current.value) {
                const result = {
                    value: current,
                    count
                };
                return result;
            };

            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            };
        };

        const result = {
            value: false,
            count
        };

        return result;
    };

    showInOrder(node) {
        if (node === undefined) {
            node = this.root;
        };

        if (node !== null) {
            this.showInOrder(node.left);
            console.log(node.value);
            this.showInOrder(node.right);
        };
    };

    showInPreOrder(node) {

        if (node === undefined) {
            node = this.root;
        };

        if (node !== null) {
            console.log(node.value);
            this.showInPreOrder(node.left);
            this.showInPreOrder(node.right);
        }
    };

    showInPostOrder(node) {
        if (node === undefined) {
            node = this.root;
        };

        if (node !== null) {
            this.showInPostOrder(node.left);
            this.showInPostOrder(node.right);
            console.log(node.value);
        }
    };
};

//recursividad, funcion que se llama a si misma.
function recursiveShowMessage(n) {
    /* if (n === 0) return;
    console.log({ cuenta: n })
    recursiveShowMessage(n - 1); */

    //investigar por que salen de manera ascendente
    //console.log({ cuenta: n })
};

recursiveShowMessage(5);

const tree = new BinarySearchTree();
let json = [];

tree.insert(7);
tree.insert(5);
tree.insert(1);
tree.insert(2);
tree.insert(9);
tree.insert(10);
tree.insert(4);
tree.insert(3);
tree.insert(6);
tree.insert(8);
/* console.log(tree);
console.log(tree.search(10)); */

for (let i = 0; i < 5000; i++) {
    const number = Math.floor(Math.random() * 1000);
    json.push(number);
    tree.insert(number);
};

const numberToSearch = 1499;

//busqueda lineal;

let exist = false;

const start = Date.now();

for (let n of json) {
    if (n === numberToSearch) {
        exist = true;
        break;
    };
};

if (exist) {
    console.log('Numero existente en busqueda lineal');
} else {
    console.log('Numero no existente en la busqueda lineal');
};

const end = Date.now();

console.log(`Tiempo de ejecucion en busqueda lineal: ${end - start} ms`);

const startTree = Date.now();

if (tree.search(numberToSearch)) {
    console.log('Numero existente en busqueda del arbol');
} else {
    console.log('Numero no existente en busqueda del arbol');
}

const endTree = Date.now();

console.log(`Tiempo de ejecucion en busqueda del arbol: ${end - start} ms`)

/* 
Notas:

showInOrder(node) {
    if (node === undefined) {
        node = this.root;
    };

    if (node !== null) {
        this.showInOrder(node.left);
        console.log(node.value);
        this.showInOrder(node.right);
    };
};

en esta funcion, se ejecuta el motodo que verificasi el argumento pasado es indefinido, de ser asi, se 
toma la raiz como el nodo a evaluar. Cuando empiza a evaluar, se hace un 'recorrido', si el nodo es
null, se acaba el recorrido. si no, se ejecuta la misma funcion con el nodo izquierdo (esto es la recursividad)
creandose una cola, es decir, el nodo 1, queda en espera a que el nodo 2 ejecute exactamente la misma funcion,
y cuando termine de ejecutarse la funcion del nodo 2, continua ejecutandose la funcion del nodo 1, es decir,
el console.log y luego, hacer la misma recursividad con el nodo de la derecha.

Lo mismo aplica para preOrder y postOrder, la diferencia sera es en que punto se ejecuta la recursividad
entre los metodos.
*/