var regex = /\b[^aA\s]{6,}\b/;
var input = "Wonderful Joyful Happiness Time Task Apple";

var words = input.split(' '); // Розбиваємо рядок на слова
var validWords = words.filter(word => regex.test(word)); // Фільтруємо за умовою

console.log(validWords);