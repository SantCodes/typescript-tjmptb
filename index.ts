// Import stylesheets
import "./style.css";
import { Xmen } from "./classes/xmen";
import { PERSONAJE } from "./classes/examencap2";
import { Rectangulo } from "./classes/rectangulo";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>RSI</h1>tsts`;

//examen cap 2
appDiv.append(PERSONAJE.nombre);

interface Xman {
  nombre: string;
  artesMarciales: string[];
}

let batman: Xman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};

appDiv.append(` ${batman.nombre}`);

let resultadoDoble = (a, b): number => (a + b) * 2;

appDiv.append(` ${resultadoDoble(1, 1)}`);

function funcionParam(nombre: string, poder?: string, arma: string = "arco") {
  let mensaje;
  if (poder) {
    mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  } else {
    mensaje = nombre + " tiene un " + poder;
  }
  return mensaje;
}

appDiv.append(` ${funcionParam("hello", "Comer")}`);

let rec: Rectangulo = new Rectangulo(2, 2);
appDiv.append(` ${rec.area()}`);

// Imolat
let xmen = new Xmen(" hi ");
appDiv.append(xmen.hola);

// interface
interface Prueba {
  nombre: string;
  apellido: string;
  opcional?: number;
}

//promesas

const promesa0 = (montoRetirar: number): Promise<number> => {
  let montoTotal = 1000;

  return new Promise((resolve, reject) => {
    if (montoRetirar > montoTotal) {
      reject(" Monto superior al disponible");
    } else {
      resolve(montoTotal - montoRetirar);
    }
  });
};

promesa0(1500)
  .then(result => appDiv.append("" + result))
  .catch(err => appDiv.append(err));

appDiv.append("Inicio");

const prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("se Terminó el timeout")
    reject("se Terminó el timeout");
  }, 1000);
});

prom1
  .then((mensaje: string) => appDiv.append(mensaje))
  .catch(err => appDiv.append(err));

// Desestructuración de arreglo

let arreglo = ["primero", "segundo", "tercero"];
let extraerArreglo = ([, juan, pepe]: string[]) => {
  appDiv.append(` ${juan}\n`);
  appDiv.append(` ${pepe}`);
};

extraerArreglo(arreglo);

let [p, a, b] = arreglo;
appDiv.append(` ${p} ${a} ${b}`);

// Desestructuración de objetos
const avenger = {
  nombre: "Steve",
  clave: "Capitan América",
  poder: "Droga"
};
//const { nombre, clave, poder } = avenger;
let extraer = ({ nombre, clave, poder }) => {
  appDiv.append(` ${nombre}`);
  appDiv.append(` ${clave}`);
  appDiv.append(` ${poder}`);
};

extraer(avenger);

function saludar(nombre: string) {
  console.table("Hola " + nombre);
}

const wolverine = {
  nombre: "Logan"
};

saludar(wolverine.nombre);

let mensaje = "Hola";

if (true) {
  let mensaje = "mundo";
}

console.log(mensaje);

const contante = "hasa";

let prueba: number | string = contante;
appDiv.append(contante);
appDiv.append(prueba);

let literal: string = `\n Muesta ${prueba}`;

let funcionS = (a: number, b: number) => a + b;

let resultado = funcionS(4, 5);
appDiv.append(literal);
appDiv.append(` ${resultado}`);

let flechaFun = (a: string) => a.toUpperCase();
function funcion2(a: string) {
  return a.toUpperCase();
}

appDiv.append(` ${funcion2("es")}`);
appDiv.append(` ${flechaFun(" eso es")}`);

const hulk = {
  nombre: "hulk",
  smash() {
    setTimeout(() => {
      appDiv.append(` ${this.nombre} `);
    }, 1000);
  }
};

hulk.smash();
