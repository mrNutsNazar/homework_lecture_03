/*
Задача №7.
З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься
*/

let numberOfTheMonth = parseInt(prompt("В ведіть номер місяця"));
let result;

switch (numberOfTheMonth)
{
    case 12:
    case 1:
    case 2: result = "Зима";
        break;
    case 3:
    case 4:
    case 5: result = "Весна";
        break;
    case 6:
    case 7:
    case 8: result = "Літо";
        break;
    case 9:
    case 10:
    case 11: result = "Осінь";
        break;
    default: result = "Невірне значення!";
        break;
}

document.write(result)