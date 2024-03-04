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
