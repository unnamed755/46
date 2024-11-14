const cars = ["non", "banan", "olma", "aziza", "zebra", "nok", "asal", "gul", "mashina"];
const withN = [];
const withoutN = [];

cars.forEach(item => {
    if (item.includes("n")) {
        withN.push(item);
    } else {
        withoutN.push(item);
    }
});

console.log(withN, "'n' harfi ishtirok etgan so'zlar");
console.log(withoutN, "'n' harfi ishtirok etmagan so'zlar");


