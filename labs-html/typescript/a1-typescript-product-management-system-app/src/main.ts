console.log("Welcome to Product Management System App");

import {Datadetails} from './productManager'; //projectManager Datadetails
import {formdetails} from './product';        //Product formdetails

// Creating an instance of Datadetails class
const dd = new Datadetails();

// create formdetails object 
const d1 : formdetails = {
    name:"rajat",
    password:"rajat@123",
    age:123,
    gender:"Male",
    price:21,
    id:3
};


dd.addData(d1);

//List all the datas
let datas : formdetails[] = dd.listData();
console.log(datas);

//Add another object
const d2 :formdetails = {
    name:"harsh",
    password:"harsh@123",
    age:456,
    gender:"Male",
    price:21,
    id:1
};
dd.addData(d2);
console.clear();

//List all the products
datas = dd.listData();
console.log(datas);

//remove data
dd.removeData(1);
datas = dd.listData();
console.log(datas);

//search data for particular id
dd.searchData(1);
console.log(datas);
console.log("hello");