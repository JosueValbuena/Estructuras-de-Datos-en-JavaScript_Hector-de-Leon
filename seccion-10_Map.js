// diccionario: almacenar clave y valor. la clave puede ser un objeto. no hay dos claves iguales.

const map = new Map();

//insertar informacion

map.set(2, 'Valor1');
map.set(10, 'Valor2');
map.set(5, 'Valor3');
map.set('clave1', 'Valor4');

const keyObject1 = { id: 1, hash: 'ABD' };

map.set(keyObject1, 'valor6');

console.log(map);

//modificar valor

map.set(2, 'Valor5');
console.log(map);

//obtener un valor

console.log(map.get(2));
console.log(map.get('50'));

//validar si existe

console.log(map.has('clave2'));

//eliminar un valor

map.delete(2);
console.log(map);

//acciones encadenadas. ej: insertar y mostrar valores o insertar varios valores.

console.log(map.set('Clave2', 'Valor7'));

map.set('asd', 21312312)
    .set('asdf', 2131231234)
    .set('asdfg', 21312312576)

//reecorrido de la coleccion;

//key

for (let key of map.values()) {
    console.log(key);
};

//value

for (let value of map.values()) {
    console.log(value);
};

//item

for (let item of map) {
    console.log(item);
};

//eliminar todo

map.clear();

console.log({ map });