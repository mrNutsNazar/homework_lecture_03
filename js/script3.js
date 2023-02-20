/*
Задача №3: 
Випадковим чином генерується число від 1 до 5. 
Спробуйте вгадати число за 2 спроби.
*/

let firstAttempt = parseInt(prompt("Введіть число від 1 до 5:"));
let secondAttempt = parseInt(prompt("Введіть ще раз число від 1 до 5:"));

let minNum = 1;
let maxNum = 5;
let numRandom = minNum + Math.floor(Math.random() * (maxNum - minNum + 1));

/*
Якщо рандом = firstAttempt то виводимо "Вітаємо! Ви вгадали число з першого разу."
Інакще якщо рандом не firstAttempt, перевіряєемо чи = secondAttempt і виводимо "Вітаємо! Ви вгадали число з другого разу."
Якщо рандон не = firstAttempt та secondAttempt - виводимо "На жаль, вам не вдалося вгадати число з двух спроб."
*/

if (numRandom === firstAttempt) {
    document.write("Вітаємо! Ви вгадали число з першого разу!")
} else if (numRandom != firstAttempt && numRandom === secondAttempt) {
    document.write("Вітаємо! Ви вгадали число з другого разу.")
} else if (numRandom != firstAttempt && numRandom != secondAttempt) {
    document.write("На жаль, вам не вдалося вгадати число з двух спроб")
}