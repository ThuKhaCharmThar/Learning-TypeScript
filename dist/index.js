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
function Greeting(name, say) {
    return `${name},${say}`;
}
const result = Greeting('thu', 'hello');
// any type
let title;
title = 30;
title = 'thu';
//tuple
let tutu;
tutu = [100, 'thu', true];
function useCoods() {
    const lat = 100;
    const lang = 200;
    return [lat, lang];
}
const [lat, lang] = useCoods();
const AuthorOne = { name: 'thu', age: 34 };
const newPost = { title: "thu kha chan", author: AuthorOne };
function createPost(post) {
    console.log(`${post.title},${post.author}`);
}
createPost(newPost);
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
const userOne = { name: 'mario', score: 75 };
function formatUser(user) {
    console.log(`${user.name} has a score of ${user.score}.`);
}
formatUser(userOne);
formatUser({ name: 'yoshi', score: 100 });
// union types
//-------------
let someId;
someId = 1;
someId = '2';
let email = null;
email = 'mario@netninja.dev';
email = null;
let anotherId;
// anotherId = undefined
anotherId = '1';
anotherId = 2;
//--------------------
// union type pitfall
//--------------------
function swapIdTypee(id) {
    // can only use props and methods common to
    // both number and string types
    // parseInt(id) --> not allowed
    return id;
}
function swapIdType(id) {
    if (typeof id === 'string') {
        // can use string methods and properties
        return parseInt(id);
    }
    else {
        // can use number methods and properties
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType('2');
console.log(idOne, idTwo);
function logDetails(value) {
    if (value.type === 'user') {
        console.log(value.email, value.username);
    }
    if (value.type === 'person') {
        console.log(value.firstname, value.age);
    }
}
