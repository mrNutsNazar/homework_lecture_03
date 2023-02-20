/*
!Задача №2:	
З клавіатури вводиться ціна товару і кількість грошей. 
Якщо грошей не вистачає то відмовляємо у покупці, інакше, 
якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.
*/

/*
В нас є:
Ціна товару
Кількість грошей

Траба порівняти чи вистачає грошей чи ні.
Якщо не вистачає то відмовити в покуці.
Інакше якщо грошей більше, то запропонувати купити лоторею за 4 грн.
*/

let price = prompt("Введіть ціну товару:");
let amountOfMoney = parseInt(prompt("Введіть кількість грошей:"));
const lotteryTicket = 4;
let change = amountOfMoney - price;

if (price > amountOfMoney) {
    document.write("Відмова в покупці, недостатьно коштів")
} else if ((price <= amountOfMoney) && (change >= lotteryTicket)) {
    document.write("В вас є можливість купити лоторейний квиток за 4 грн.")
} else if ((price <= amountOfMoney) && (change < lotteryTicket)) {
    document.write("Дякуємо за покупку! ")
}