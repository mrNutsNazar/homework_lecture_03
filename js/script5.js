/*
Задача №5:	
З клавіатури вводиться назва категорії водія 
(А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). 
Вивести на екран назву транспортного засобу, яким він може керувати.
*/

let driverCategory = prompt("Введіть категорію водія - A, B або C:");

const motorcycle = 'A';
const car = 'B';
const truck = 'C';

/*
Якщо в водимо А отримуемо мотоцикл
якщо В 
*/

if (driverCategory === motorcycle) {
    document.write("Цей водій може керувати лише мотоциклами")
} else if (driverCategory === car) {
    document.write("Цей водій може керувати лише легковими автомобілями")
} else if (driverCategory === truck) {
    document.write("Цей водій може керувати лише вантажні автомобілі")
}
