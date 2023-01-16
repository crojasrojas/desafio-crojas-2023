/**
* * Bienvenidos a la segunda parte del desafío E-Contact, la cual esta destinada a evaluar los conocimientos adquiridos de Javascript.
* * Este prueba constará de 20 ejercicios

* * NOTA1: El examen es individual
* * NOTA2: Fecha límite de entrega: Miércoles 11/01/2023 - 23:59hs

* * INFORMACION SOBRE EL DESARROLLO DE LOS EJERCICIOS:
* * Algunos ejercicios no tendrán que operar con el arreglo u objeto establecido a continuación, otros sí.
* * NO MODIFICAR el arreglo y objeto definido a continuación:
* * (Los datos son ficticios. El objeto es evaluar los conocimientos del alumno)
*/

const arregloFijo = [1, 3, 4, 7, 12, 18, 20, 26];
const numerosReales = [34.4552, 25.1543, 17.9438, 90.5, 67.82, 5, 9.99, 62.037];

const objetoFijo = {
  empresa: "E-Contact",
  datos: {
    empleados: 100,
    direccion: {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

//? ================================= INICIO DEL DESAFIO. EXITOS A TODOS !!! =============================================================================

/**
 *? EJERCICIO 1: Crear una función la cual reciba un parámetro de tipo string con el nombre de la persona y retornar un nuevo string
 *? dependiendo del largo del nombre:
 *? Si el largo se encuentra entre 0 y 5 retornar "Es un nombre corto. Su largo es de: "
 *? Si el largo es 11 o mayor retornar "Es un nombre largo. Su largo es de: "
 *? IMPORTANTE: validar que el parámetro recibido sea un string al inicio de la función, de lo contrario, retornar "El parámetro recibido es invalido"
 *? RECORDATORIO: al leer la sentencia "return" termina la ejecución de la función.
 */

function largoDelNombre(nombre = ""){
  let respuesta = "";

  if(typeof nombre === 'string' )
  {
    if(nombre.length >=0 && nombre.length <= 5)
    {
      respuesta = "Es un nombre corto. Su largo es de: " + nombre.length.toString();
    }
    else if(nombre.length >= 11)
    { 
      respuesta = "Es un nombre largo. Su largo es de: " + nombre.length.toString();
    }
    else
    {
      respuesta = "El parámetro ingresado tiene un largo de: " + nombre.length.toString();
    }
  }
  else{
        respuesta = "El parámetro recibido es inválido.";
  }
  return respuesta;
}

//! =======================================================================================================================================================

/**
 *? EJERCICIO 2: Crear una función que reciba un arreglo como parámetro y cuente cuantos valores de tipo "number" se encuentran dentro de dicho arreglo
 */

function contarTipoNumber(arreglo = []) {
  let contador = 0;
  let respuesta;

  if(arreglo.length > 0){
    for(let indexarray = 0; indexarray < arreglo.length; indexarray++)
    {
      if(typeof arreglo[indexarray] === 'number') 
        contador++;
    }
  }
  respuesta = `La cantidad de elementos numéricos del arreglo es: ${contador}`;
  
  return respuesta;
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 3: Crear una función que reciba un objeto como parámetro con los claves nombre, edad y altura, y retornar un string usando template literals
 *? con el siguiente formato: "Esta persona se llama XXX, tiene XXX años y su altura es de XXX"
 *? NOTA: Desestructurar los valores del objeto antes de utilizarlos
 */

function datosPersona(persona = {}) {
  let respuesta;
  const { nombre : NombrePersona, edad : EdadPersona, altura : AlturaPersona } = persona;
  
  respuesta = "";

  if(Object.entries(persona).length > 0){
    if(NombrePersona != undefined)
      respuesta += `Esta persona se llama ${NombrePersona}`;

    if(EdadPersona != undefined)
      respuesta += `, tiene ${EdadPersona} años`;
    
    if(AlturaPersona != undefined)
      respuesta +=  ` y su altura es de ${AlturaPersona} cms.`;
  }
  else
    respuesta = "La información ingresada es incorrecta.";

  return respuesta;
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 4: Crear una función que reciba 2 (dos) parámetros de tipo "number" con el inicio y fin del rango a operar. Evaluar cuántos números dentro de
 *? ese rango son "pares". Luego, retornar un string con la frase "La cantidad de números pares obtenido fue de: "
 *?
 */

function obtenerCantidadDePares(numero1, numero2) {
  let countPares = 0;
  let respuesta;

  if(numero1 <= numero2){
    for(numero1; numero1 <= numero2; numero1++)
    {
      if(numero1%2 == 0)
        countPares++;
    }
  }

  respuesta = `La cantidad de números pares obtenido fue de: ${countPares}`;

  return respuesta;
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 5: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la "cantidad" de sedes que posee.
 *? Ayuda inicial: Primero asegurarse de obtener correctamente el objeto "sedes"
 *? De ser necesario utilizar un "contador" (no es obligatorio para su resolución)
 *? Recordar el método "Object.keys(nombreDelObjeto)" nos devuelve un arreglo de strings con los claves del objeto.
 *?
 */

function obtenerCantidadDeSedes(econtact = {}) {
  let respuesta;

  let sedes = Object.keys(econtact.datos.sedes);

  respuesta = `La cantidad de sedes que posee econtact es: ${sedes.length}`;

  return respuesta;
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 6: Crear una función que reciba el "objetoFijo" definido al inicio y retornar el teléfono de "Peru".
 *? Validar al inicio de la función si el teléfono de Perú existe. Caso contrario retornar un string que diga "Perú no tiene asignado un teléfono"
 */

function obtenerTelefonoPeru(econtact = {}) {
  let respuesta;
  let datosSede;

  for(const currentSede of Object.keys(econtact.datos.sedes)){
    if(currentSede === 'Peru'){
        datosSede = econtact.datos.sedes[currentSede];
        break;
    }
  } 

  respuesta = "Perú no tiene asignado un teléfono";

  if(datosSede != undefined){
    const {telefono, empleados} = datosSede;

    if(telefono != undefined){
      respuesta = `El teléfono de la sede de Perú es: ${telefono}`;
    }
  }

  return respuesta;
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 7: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la cantidad de paises que cuentan con telefono asignado
 *?
 */

function obtenerPaisesConTelefono(econtact = {}) {
  let respuesta;
  let totalSedes = 0;

  for(const currentSede of Object.keys(econtact.datos.sedes)){
    const {telefono, empleados} = econtact.datos.sedes[currentSede];

    if(telefono != undefined){
      totalSedes++;
    }
  }

  respuesta = `La cantidad de paises con teléfono son: ${totalSedes}`;
  
  return respuesta;
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 8: Crear una función que reciba 3 (tres) parámetros: uno de tipo "string" con la operación matemática a realizar,
 *? un segundo y tercer parámetro ambos de tipo number. Dependiendo de ello realizar la operación correspondiente y retornar el resultado de esa operación.
 *? Los valores permitidos a recibir son:
 *? "+"
 *? "-"
 *? "*"
 *? "/"
 *? En caso contrario, retornar un string con la frase "La operación matemática que intenta realizar es inexistente"
 */

function calculoMatematico(operacion, numero1, numero2) {
  let respuesta;
  let resultado = 0;

  if( (typeof numero1 === "number") && (typeof numero2 === "number") ){
    switch (operacion)
    {
      case "+":
        resultado = numero1 + numero2;
        respuesta = `El resultado de la operación "${operacion}" es: ${resultado}`;
        break;
      case "-":
        resultado = numero1 - numero2;
        respuesta = `El resultado de la operación "${operacion}" es: ${resultado}`;
        break;
      case "*":
        resultado = numero1 * numero2;
        respuesta = `El resultado de la operación "${operacion}" es: ${resultado}`;
        break;
      case "/":
        resultado = numero1 / numero2;
        respuesta = `El resultado de la operación "${operacion}" es: ${resultado}`;
        break;
      default:
        respuesta = "La operación matemática que intenta realizar es inexistente";
        break;
    }    
  }
  else{
    respuesta = "Uno de los párametros ingresados tiene un formato inválido.";
  }

  return respuesta;
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 9: Crear una función que reciba un número como parámetro y, a partir de ahi, ir agregando ese mismo valor y los siguientes a un arreglo hasta que
 *? el número a ser evaluado sea igual al doble de ese número recibido como parámetro
 *? Validar al inicio de la función que el número sea positivo. De lo contrario retornar la frase "El número ingresado debe ser mayor a 0"
 *? Ayuda: usar ciclo while y recordar el método "push" para ir agregando valores al arreglo
 */

function cargarArreglo(numero) {
  let respuesta;
  let auxI = numero;
  const numeros = [];

  if(numero > 0){
    while(auxI <= numero * 2) {
      numeros.push(auxI++);
    }
    respuesta = numeros; 
  } 
  else {
    respuesta = "El número ingresado debe ser mayor a 0";
  }

  return respuesta;
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 10: Crear una función que reciba un arreglo de números como parámetro y calcule cuántos de esos números son divisibles por 5.
 *? La función debe retornar la cantidad de números divisibles por 5.
 *?  Ayuda: Usar el operador módulo (o resto) "%"
 */

function divisiblesPorCinco(numeros = []) {
  let respuesta;

  let contador = numeros.reduce((acum, item) => (acum += !(item%5) ? 1 : 0), 0);

  respuesta = `La cantidad de números divisbles por 5 son: ${contador}`;

  return respuesta;
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 11: Crear una función que reciba un arreglo de números y realice la sumatoria de los mismos.
 *? La función debe retornar la sumatoria de esos números.
 *?
 */

function sumatoria(numeros = []) {
  let respuesta;
  
  let sumatoria = numeros.reduce((acum, item) => (acum += (typeof item === "number") ? item : 0), 0);

  respuesta = `La sumatoria de números del arreglo es: ${sumatoria}`;
  return respuesta;
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 12: Crear una función que reciba el "objetoFijo" definido al inicio y verificar si la cantidad total de empleados de E-Contact indicada (100) es igual
 *? a la sumatoria de los empleados de las sedes.
 *? La función debe retornar True si son iguales, o False en caso de no ser iguales
 */

function verificarCantidadEmpleados(econtact = {}) {
   let numEmpleados = 0;
   let totalEmpleados = econtact.datos.empleados != undefined ? econtact.datos.empleados : 0;

  for(const infoSedes of Object.keys(econtact.datos.sedes)){
    const {telefono, empleados} = econtact.datos.sedes[infoSedes];

    if(empleados != undefined){
      numEmpleados += empleados;
    }
  }

  if(numEmpleados === totalEmpleados)
    return true;
  else
    return false;
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 13: Crear una función que retorne un nuevo arreglo con el cuadrado de cada número del "arregloFijo" definido al inicio
 *? Ayuda: para calcular el cuadrado de un número podemos usar la expresión "**" o la clase "Math" con su método "pow". Ver ejemplos a continuación:
 *? Ejemplo de 3 al cuadrado:
 *? console.log(3 ** 2)
 *? Ejemplo de 5 al cuadrado:
 *? console.log(Math.pow(5, 2))
 */

function calcularCuadrados(arreglo = []) {
  const numCuadrados = [];

  for(let i = 0; i < arreglo.length; i++){
    numCuadrados.push(Math.pow(arreglo[i],2));
  }

  return numCuadrados;
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 14: Crear una función que reciba como parámetro un arreglo de 6 (seis) números como mínimo y realizar la sumatoria de los mismos.
 *? Si la sumatoria supera un valor de 100 retornar True.
 *? Caso contrario retornar False.
 *? Validar al inicio de la función que el arreglo cuente con la condición establecida. Si no cumple la misma, retornar False
 */

function validarArreglo(numeros = []) {
  let sumatoria = 0;

  if(numeros.length != 6)
    return false;
  
  for(let auxI = 0; auxI < numeros.length; auxI++){
    if(typeof numeros[auxI] === "number"){
      sumatoria += numeros[auxI];
    }      
  }

  if(sumatoria === 100)
    return true;
  else
    return false;
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 15: Crear una función que reciba dos parámetros: un arreglo de strings con diferentes nombres, y un segundo parámetro con un nombre (string) cualquiera.
 *? La función debe retornar True si en ese arreglo se encuentra el nombre pasado como segundo parámetro. Caso contrario retornar False.
 *? Recordar que Javascript es "Case Sensitive", es decir, distingue entre mayúsculas y minúsculas.
 */

function validarNombre(nombres = [], nombre) {
  return nombres.includes(nombre);
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 16: Crear una función que reciba 2 (dos) parámetros: un arreglo de números y número. La función debe retornar la posición de ese valor en el arreglo
 */

function devolverPosicion(numeros = [], numero) {
  return numeros.indexOf(numero);
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 17: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un string. Retornar True si el segundo parámetro se encuentra
 *? dentro de los sectores de E-Contact. Caso contrario, retornar False
 */

function verificarSector(econtact = {}, sector) {
  return econtact.datos.sectores.includes(sector);
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 18: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un número (cantidad de empleados).
 *? La función debe retornar la cantidad de sedes que tengan una cantidad de empleados menor a la cantidad establecida como segundo parámetro.
 */

function verificarCantidadEmpleados2(econtact = {}, cantidad) {
  let numSedes = 0;

  Object.values(econtact.datos.sedes).forEach(function(sede){
    if(sede.empleados < cantidad)
      numSedes++;
  });

  return numSedes;
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 19: Crear una función que reciba 2 (dos) parámetros: un objeto y un string (clave a verificar). Si el objeto cuenta con la clave que se solicita
 *? como segundo parámetro, retornar True. Caso contrario retornar False.
 *? Ejemplo: El siguiente objeto cuenta con las claves nombre, edad y profesion. PERO no cuenta con la clave "altura" por ejemplo.
 *? const alumno = { nombre: 'Juan', edad: 35, profesion: 'programador' }
 *?
 */

function verificarClave(objeto = {}, clave) {
  let hasKey = Object.keys(objeto).some(key => key === clave);
  
  return hasKey;
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 20: Crear una función que reciba un arreglo de numeros reales y retornar un nuevo arreglo con los mismos numeros pero quitando su parte decimal.
 *? Recordatorio: al inicio hay un arreglo de numeros reales como ejemplo.
 */
 
function quitarParteDecimal(arregloNumerosReales = []) {
  const numerosEnteros = [];

  for(let auxi =0; auxi < arregloNumerosReales.length; auxi++){
    numerosEnteros.push(Math.trunc(arregloNumerosReales[auxi]));
  }

  return numerosEnteros;
}



//!=============================================================

console.log("Testing de funciones en javascript");
console.log("===================================");
console.log(largoDelNombre("Cristian"));
console.log(largoDelNombre("Cristian Rojas"));
console.log(largoDelNombre("Cristian   "));
console.log(largoDelNombre("Rojas"));
console.log(largoDelNombre(111));
console.log("===================================");
console.log(contarTipoNumber(['aaaa',1,2,3,4,true,false,-1,100]));
console.log(contarTipoNumber([]));
console.log(contarTipoNumber(['aaaa',true,false]));
console.log("===================================");
console.log(datosPersona({nombre:"Cristian",edad:"43",altura:"170"}));
console.log(datosPersona({nombre:"Cristian",edad:"43"}));
console.log(datosPersona({nombre:"Cristian", altura:"170"}));
console.log(datosPersona({}));
console.log("===================================");
console.log(obtenerCantidadDePares(1,20));
console.log(obtenerCantidadDePares(21,1));
console.log(obtenerCantidadDePares(1,1));
console.log(obtenerCantidadDePares(-10,0));
console.log("===================================");
console.log(obtenerCantidadDeSedes(objetoFijo));
console.log("===================================");
console.log(obtenerTelefonoPeru(objetoFijo));
console.log("===================================");
console.log(obtenerPaisesConTelefono(objetoFijo));
console.log("===================================");
console.log(calculoMatematico("+",10, 30));
console.log(calculoMatematico("-",10, 30));
console.log(calculoMatematico("*",10, 30));
console.log(calculoMatematico("/",10, 30));
console.log("===================================");
console.log(cargarArreglo(-10));
console.log(cargarArreglo(65));
console.log("===================================");
console.log(divisiblesPorCinco([1,2,3,4,5,6,7,8,9,10,19,20,25,30,40,90]));
console.log(divisiblesPorCinco([11,0,6,5,55,67,70,80,91,100,190,20,22,33,40,90]));
console.log("===================================");
console.log(sumatoria([1,2,3,4,5,6,7,8,9,"10","1",null]));
console.log(sumatoria([-1,20,35,411,50,-60,70,81,90]));
console.log(sumatoria([]));
console.log("===================================");
console.log(verificarCantidadEmpleados(objetoFijo));
console.log("===================================");
console.log(calcularCuadrados(arregloFijo));
console.log("===================================");
console.log(validarArreglo([1,2,3,4,5,6]));
console.log(validarArreglo([1,2,3,4,5]));
console.log(validarArreglo([1,2,3,4,5,"q"]));
console.log(validarArreglo([10,20,50,10,5,5]));
console.log("===================================");
console.log(validarNombre(['Cristian','Rojas','Perez'],'Cristian'));
console.log(validarNombre(['Cristian','Rojas','Perez','cristian','econtact'],'Christian'));
console.log("===================================");
console.log(devolverPosicion([1,2,3,4,5,6,7,8],7));
console.log(devolverPosicion([1,2,3,4,5,6,7,8],10));
console.log(devolverPosicion([1,2,3,4,5,6,7,8],3));
console.log("===================================");
console.log(verificarSector(objetoFijo,"Finanzas"));
console.log(verificarSector(objetoFijo,"Contabilidad"));
console.log(verificarSector(objetoFijo,"Gerencia"));
console.log("===================================");
console.log(verificarCantidadEmpleados2(objetoFijo,10));
console.log(verificarCantidadEmpleados2(objetoFijo,35));
console.log(verificarCantidadEmpleados2(objetoFijo,100));
console.log("===================================");
console.log(verificarClave({ nombre: 'Juan', edad: 35, profesion: 'programador' },"altura"));
console.log(verificarClave({ nombre: 'Juan', edad: 35, profesion: 'programador' },"profesion"));
console.log(verificarClave({ nombre: 'Juan', edad: 35, profesion: 'programador', altura: "1.70" },"altura"));
console.log("===================================");
console.log(quitarParteDecimal(numerosReales));
console.log(quitarParteDecimal([1,2,10.5,100.90,1.2,0]));