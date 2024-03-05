let age:number =49;
let person:string='Hume Hmue';
let bool:boolean=true;

let fruits =['kiwi','banana','mango'];
let data={
    name :"Thu Kha",
    age :22,
    address :"Mandalay"
}

let names:string[]=['Thu','kha','Chan'];
let ages:number[]=[12,14,15];
names.push('Hmure');
ages.push(22);

function AddNumber(a:number,b:number):number{
    return a+b
}
function SubNumber(a:number,b:number):number{
    return a-b
}
function AddAllBumber(items:number[]):void{
    const total =items.reduce((a,c)=> a+c,0)
    console.log(total);
}
AddAllBumber([12,2,4,3,21,54]);

function Greeting(name:string,say:string):string{
    return `${name},${say}`;
}
const result=Greeting('thu','hello')

// any type
let title:any
title=30
title='thu' 

//tuple
let tutu:[number,string,boolean]
tutu=[100,'thu',true]

function useCoods():[number,number]{
    const lat=100
    const lang=200

    return[lat,lang]
}
const [lat,lang]=useCoods();
interface Author {
    name:string
    age:number
}

const AuthorOne:Author={name:'thu',age:34}

interface post{
    title:string
    author:Author
}

const newPost:post={title:"thu kha chan",author:AuthorOne}

function createPost(post:post):void{
    console.log(`${post.title},${post.author}`)
}

createPost(newPost)

type Rgb = [number, number, number]

function getRandomColor(): Rgb {
	const r = Math.floor(Math.random() * 255)
	const g = Math.floor(Math.random() * 255)
	const b = Math.floor(Math.random() * 255)

	return [r, g, b]
}

const colorOne = getRandomColor()
const colorTwo = getRandomColor()
console.log(colorOne, colorTwo)

// example 2 - object literal

type User = {
	name: string
	score: number
}

const userOne: User = { name: 'mario', score: 75 }

function formatUser(user: User): void {
	console.log(`${user.name} has a score of ${user.score}.`)
}

formatUser(userOne)
formatUser({ name: 'yoshi', score: 100 })

// union types
//-------------

let someId: number | string

someId = 1
someId = '2'

let email: string | null = null

email = 'mario@netninja.dev'
email = null

type Id = number | string
let anotherId: Id

// anotherId = undefined
anotherId = '1'
anotherId = 2

//--------------------
// union type pitfall
//--------------------

function swapIdTypee(id: Id): Id {
	// can only use props and methods common to
	// both number and string types
	// parseInt(id) --> not allowed

	return id
}
//-------------
// type guards
//-------------

// example 1

type Idd = number | string

function swapIdType(id: Idd): Idd {
	if (typeof id === 'string') {
		// can use string methods and properties
		return parseInt(id)
	} else {
		// can use number methods and properties
		return id.toString()
	}
}

const idOne = swapIdType(1)
const idTwo = swapIdType('2')

console.log(idOne, idTwo)

//--------------------
// tagged union types
//--------------------

interface Userr {
	type: 'user'
	username: string
	email: string
	id: Id
}
interface Person {
	type: 'person'
	firstname: string
	age: number
	id: Id
}

function logDetails(value: Userr | Person): void {
	if (value.type === 'user') {
		console.log(value.email, value.username)
	}
	if (value.type === 'person') {
		console.log(value.firstname, value.age)
	}
}