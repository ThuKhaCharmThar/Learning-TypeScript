"use strict";
let age = 49;
let person = 'Hume Hmue';
let bool = true;
let fruits = ['kiwi', 'banana', 'mango'];
let data = {
    name: "Thu Kha",
    age: 22,
    address: "Mandalay"
};
let names = ['Thu', 'kha', 'Chan'];
let ages = [12, 14, 15];
names.push('Hmure');
ages.push(22);
function AddNumber(a, b) {
    return a + b;
}
function SubNumber(a, b) {
    return a - b;
}
function AddAllBumber(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
AddAllBumber([12, 2, 4, 3, 21, 54]);
