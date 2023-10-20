import functionDiv from "../practique/function1";
import { functionDig } from "../practique/function2";
import { functionArr } from "../practique/function3";
import { functionArrTwo } from "../practique/function4";

describe("create functions", ()=> {
    test("escribir una funcion que reciba un numero y devuelva si es divisible por,2,3,5 o 7", () => {
        expect(functionDiv(5)).toBe(true);
    });
    test("Escribir una función que reciba un número y devuelva el número de dígitos que tiene.", () => {
        expect(functionDig(123)).toBe(3);
    });
    test("escribir una funcion que reciba una cadena de texto y devuelva si es un palindromo", () => {
        expect(functionArr([33, 55, 10, 4, 12])).toBe(4);
    });
    test("escribir una funcion que reciba una cadena de texto y devuelva si es un palindromo", () => {
        expect(functionArrTwo([33, 55, 10, 4, 12])).toBe(55);
    });
    test("Escribir una función que reciba un array de números y devuelva la media de los números.", () => {
        expect(functionMed([1, 4, 5])).toBe(5);
    });
})