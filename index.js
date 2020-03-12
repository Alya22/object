// 1. Створіть об'єкт city1 (var city1 = {}), вкажіть у нього властивості name (назва міста, рядок) із значенням «ГородN»
//  і population (населеність міста, число) зі значенням 10 млн.
// 2. Створіть об'єкт city2 через нотацію {name: "ГородM", population: 10^6}.
// 3. Створіть у об'єктів city1 і city2 методи getName (), які повернуть відповідні назви міст
// 4. Створіть методи exportStr () у кожного з об'єктів. Цей метод повинен повертати інформацію про місто в форматі 
// «name = ГородN \ npopulation = 10000000 \ n». Для другого міста буде рядок зі своїми значеннями. Примітка: можна звертатися до кожного 
// властивості через цикл for / in, але методи об'єкта повертати не потрібно

var city1 = {};

city1.name = "city N";
city1.population = 10 ** 7;

city1.getName = function() {
    return this.name;
}
city1.exportStr = function() {
    return "name = " + this.name + "\npopulation = " + this.population + "\n";
}
var city2 = {
    "name": "city M",
    "population": 10 ** 7,
    getName() {
        return this.name;
    },
    exportStr() {
        return "name = " + this.name + "\npopulation = " + this.population + "\n";
    }
};

console.log(city1.exportStr())
console.log(city2.exportStr())