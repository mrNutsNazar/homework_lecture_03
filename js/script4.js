/*
Задача №4.	
З клавіатури вводиться вік людини. 
Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).
*/

/*
Вік людини 
Дитина 0-6
Школяр 7-17
Студент 18-22
Працівник 23-64
Пенсіонер 65-інфініті
*/

let humanAge = parseInt(prompt("Введіть вік людини:"));

const minAgeChild = 0;
const maxAgeChild = 6;

const minAgeLearner = 7;
const maxAgeLearner = 17;

const minAgeStudent = 18;
const maxAgeStudent = 22;

const minAgeWorker = 23;
const maxAgeWorker = 64;

const AgePensioner = 65;

// Якщо (humanAge>= minAgeChild) i (humanAge <=maxAgeChild)
// тоді виводимо "Цей вік означає що людина - Дитина"

if ((humanAge >= minAgeChild) && (humanAge <= maxAgeChild)) {
    document.write("Цей вік означає що людина - Дитина")
} else if ((humanAge >= minAgeLearner) && (humanAge <= maxAgeLearner)) {
    document.write("Цей вік означає що людина - Школяр")
} else if ((humanAge >= minAgeStudent) && (humanAge <= maxAgeStudent)) {
    document.write("Цей вік означає що людина - Студент")
} else if ((humanAge >= minAgeWorker) && (humanAge <= maxAgeWorker)) {
    document.write("Цей вік означає що людина - Працівник")
} else if (humanAge >= AgePensioner) {
    document.write("Цей вік означає що людина - Пенсіонер")
}