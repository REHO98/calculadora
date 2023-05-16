const sumar = require('./operadores/sumar.js');
const restar = require('./operadores/restar.js');
const multiplicar = require('./operadores/multiplicar.js');
const dividir = require('./operadores/dividir.js');
const potencia = require('./operadores/potencia.js');
const raiz = require('./operadores/raiz.js');
const resto = require('./operadores/resto.js');

console.log(sumar(100, 258)); // resultado: 358
console.log(restar(525, 25)); // resultado: 500
console.log(multiplicar(38, 7)); // resultado: 266
console.log(dividir(2, 3)); // resultado: 0.6
console.log(dividir(10, 0)); // resultado: "No se puede dividir por cero"
console.log(potencia(16, 4)); // resultado: 65536
console.log(raiz(32, 9)); // resultado: 1.46
console.log(resto(421, 9)); // resultado: 7

/* 
a. ¿Qué hubiese sucedido si, en vez de generar un archivo por cada operación
matemática, hubiésemos programado todo en un mismo archivo

Si hubiéramos programado todas las operaciones matemáticas en un solo archivo, 
es probable que al principio hubiera sido más fácil y rápido de escribir. Pero a medida que el código crece, 
es posible que se vuelva más difícil de mantener y modificar.

b. ¿Por qué el mejor camino es generar distintos archivos y luego requerirlos en uno solo?

El mejor camino es generar distintos archivos para cada función y 
luego requerirlos en un archivo principal porque esto permite modularizar el código y hacerlo más fácil de entender, mantener y actualizar.

c. ¿Será esta metodología de trabajo una constante de aquí en adelante?

No necesariamente. La metodología de trabajo puede variar dependiendo del proyecto y las necesidades específicas del mismo. 
En algunos casos puede ser más conveniente trabajar con un solo archivo, mientras que en otros puede ser necesario dividir el código en 
diferentes archivos para facilitar su mantenimiento y escalabilidad. Lo importante es siempre evaluar las necesidades y requerimientos 
del proyecto para tomar la mejor decisión en cuanto a la estructura y organización del código.

*/