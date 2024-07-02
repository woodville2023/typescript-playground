import { Address, Person } from "./model";

let fname:string = 'arun';
console.log('fname:',fname);
let lname:string = 'shakya'
let age:number = 60;

console.log('person>>fname:',fname,',lname:',lname,',age:',age);

const person:Person ={fname,lname,age};
console.log('person object:',person);

const address:Address = {
  streetNum : 777,
  streetName : 'ello st',
  zip: '12345'
};

console.log('address :',address);
