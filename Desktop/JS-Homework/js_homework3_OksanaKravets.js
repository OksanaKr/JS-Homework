function pow(x, y) {
    let result = 1;
    if (y == 0) return 1;  
    // будь-яке число в нульовому степені повертає 1
    if (y < 0) return 1 / pow(x, -y);  
    // інвертуємо результат для негативного степеня
    return x * pow(x, y - 1);  
    // множимо на x, поки y не стане 0
}
let result1 = pow(2, 3);  // 2 в степені 3
let result2 = pow(5, -2); // 5 в степені -2
// обчислюємо значення через функцію pow

console.log(result1); // Result: 8
console.log(result2); // Result: 0.04 