/*
Задача №6.	
З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
*/

let dayOfTheWeek = parseInt(prompt("В ведіть номер дня тижня"));
let result;

switch (dayOfTheWeek)
{
    case 1: result = "Понеділок";
        break;
    case 2: result = "Вівторок";
        break;
    case 3: result = "Середа";
        break;
    case 4: result = "Четвер";
        break;
    case 5: result = "П'ятниця";
        break;
    case 6: result = "Субота";
        break;
    case 7: result = "Неділя";
        break;
    default: result = "Невірне значення!";
        break;
}

document.write(result)