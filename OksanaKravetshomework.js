// Task 1
const result1 = "number" + 3 + 3;
console.log("Result 1:", result1); // Result: "number33"
// Для "number" + 3 виконується конкатенацію. Отримуємо "number3"
// Для "number3" + 3 також виконується конкатенацію. Отримуємо "number33"

// Task 2
const result2 = null + 3;
console.log("Result 2:", result2); // Result: 3
// null в числових операціях перетворюється на 0. Тобто 0 + 3 = 3

// Task 3
const result3 = 5 && "qwerty";
console.log("Result 3:", result3); // Result: "qwerty"
// Оператор && повертає останнє істинне значення

// Task 4:
const result4 = +"40" + +"2" + "hillel";
console.log("Result 4:", result4); // Result: "42hillel"
// +"40" дає 40, +"2" дає 2
// 40 + 2 = 42
// Потім конкатенація з "hillel": "42hillel"

// Task 5
const result5 = "10" - 5 === 6;
console.log("Result 5:", result5); // Result: false
// "10" перетворюється на число 10.
// 10 - 5 = 5.
// Порівняння 5 === 6 поверне результат false.

// Task 6:
const result6 = true + false;
console.log("Result 6:", result6); // Result: 1
// true є 1, false є 0.
// 1 + 0 = 1.

// Task 7:
const result7 = "4px" - 3;
console.log("Result 7:", result7); // Result: NaN
// "4px" не є числом і не перетворюється на число
// Числова операція з "NaN" ("4px") повертає NaN.

// Task 8:
const result8 = "4" - 3;
console.log("Result 8:", result8); // Result: 1
// "4" перетворюється на число 4.
// 4 - 3 = 1.

// Task 9:
const result9 = "6" + 3 ** 0;
console.log("Result 9:", result9); // Result: "61"
// 3 ** 0 = 1 (піднесення до нульового степеня = 1)
// Конкатенація "6" + 1 = "61"

// Task 10:
const result10 = 12 / "6";
console.log("Result 10:", result10); // Result: 2
// "6" перетворюється на число 6
// 12 / 6 = 2

// Task 11:
const result11 = "10" + (5 === 6);
console.log("Result 11:", result11); // Result: "10false"
// 5 === 6 це - false
// Конкатенація "10" + false = "10false"

// Task 12:
const result12 = null == "";
console.log("Result 12:", result12); // Result: false
// null може бути тільки undefined, але не з порожнім рядком

// Task 13:
const result13 = 3 ** (9 / 3);
console.log("Result 13:", result13); // Result: 27
// 9 / 3 = 3
// 3 ** 3 = 27

// Task 14:
const result14 = !!"false" == !!"true";
console.log("Result 14:", result14); // Result: true
// !! перетворює значення на булеве
// Обидва непорожні рядки це - true
// true == true.

// Task 15:
const result15 = 0 || "0" && 1;
console.log("Result 15:", result15); // Result: 1
// Спочатку виконується "0" && 1 = 1
// Потім 0 || 1 повертає 1

// Task 16:
const result16 = (+null == false) < 1;
console.log("Result 16:", result16); // Result: false
// Дія в скобках: +null дає 0, а 0 == false повертає true
// true < 1 повертає false

// Task 17:
const result17 = false && true || true;
console.log("Result 17:", result17); // Result: true
// false && true повертає false
// false || true повертає другий операнд true

// Task 18:
const result18 = false && (false || true);
console.log("Result 18:", result18); // Result: false
// false || true дає true
// false && true повертає false

// Task 19:
const result19 = (+null == false) < 1 ** 5;
console.log("Result 19:", result19); // Result: false
// Дія в дужках +null дає 0, а 0 == false повертає true
// 1 ** 5 = 1
// true < 1 повертає false