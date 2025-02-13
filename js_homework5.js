var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    "Cтайлинг": "200 грн",
    "Фарбування": "1500 грн",

    getPrices() {
        return Object.values(this)
            .filter(value => typeof value === "string" && value.includes("грн"))
            .map(value => parseInt(value));
    },
    price() {
        return this.getPrices().reduce((sum, current) => sum + current, 0) + " грн";
    },
    minPrice() {
        return Math.min(...this.getPrices()) + " грн";
    },
    maxPrice() {
        return Math.max(...this.getPrices()) + " грн";
    }
};

console.log("Загальна вартість:", services.price());
console.log("Мінімальна ціна:", services.minPrice());
console.log("Максимальна ціна:", services.maxPrice());