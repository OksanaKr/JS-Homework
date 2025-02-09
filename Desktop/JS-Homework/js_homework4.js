function checkProbabilityTheory(count) {
    let evenCount = 0;
    
    // Генерація чисел і підрахунок парних чисел
    for (let i = 0; i < count; i++) {
        if ((Math.floor(Math.random() * 901) + 100) % 2 === 0) evenCount++;
    }

    let oddCount = count - evenCount; // підрахунок непарних чисел
    let evenPercentage = evenCount * 100 / count; // кількість парних чисел
    let oddPercentage = oddCount * 100 / count; // кількість непарних чисел.
    
    // Перевірка на близькість до 50%50
    if (Math.abs(evenPercentage - 50) <= 5) {
        console.log("Співвідношення близьке до 50%.");
    } else {
        console.log("Співвідношення не близьке до 50%.");
    }

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Непарних чисел: ${oddCount}`);
    console.log(`Відсоток парних чисел: ${evenPercentage}%`);
    console.log(`Відсоток непарних чисел: ${oddPercentage}%`);
}
checkProbabilityTheory(100);