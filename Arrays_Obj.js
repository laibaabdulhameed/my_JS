// Manipulation of arrays
let arr = [1,2,3,4,5,6];
let  narr = arr.map(num => num*num);// give a new array non-mutating method
// console.log(narr);
// console.log(farr); give values who pass
let farr = arr.find(x => x%2===0);
let fiarr = arr.filter(x => x%2===0);
let sarr = arr.splice(1,2,'a','b');
// console.log(sarr);
// console.log(arr);
// arrays to object conversion
let newarray = [['a',1],['b',2],['c',3]];
const obj = Object.fromEntries(newarray);
// console.log(obj);
const arr2 =[
    {id:1,name:'john'},
    {id:2,name:'aam'},
    {id:3,name:'joy'},
];
const obj2 = arr2.reduce((acc,item)=>{
    acc[item.id] = item;
    return acc;
},{});
// console.log(obj2);

// Object
const obj1 = {
    a:1,
    b:2,
    c:3
};
obj1.d = 4;
delete obj1.d ;
// obj1['d'] = 4
const newobj = {...obj1,e:5}
// console.log(newobj);
// console.log(obj1);
const {b,...rest} = obj;
// console.log(rest);
const access = 'a' in obj1;
// console.log(acces);

let accessobj =Object.entries(obj1);
// console.log(accesskeys);

// iterating over objects
const obj4 = {
    a:1,
    b:2,
    c:3
};
for (const key in obj4) {
//   console.log(obj4[key]);
}
Object.keys(obj).forEach(key =>{
    // console.log(key,obj4[key]);
    
});
const obj5 = {
    a:1,
    b:2,
    c:3,
    d:4
};
// const arr3 = Object.entries(obj5).map(([key,value])=> ({key , value}));
const arr3 =[...Object.entries(obj5)]
// console.log(arr3);
const obj6 = Object.fromEntries(arr3);
// console.log(obj6);
// conversion of arrays into Object
const arr4=[1,2,3];
const obj7 = {...arr4}
console.log(obj7);











