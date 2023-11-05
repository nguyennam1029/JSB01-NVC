


// console.log('Javascript')
// const name = 'value';
// console.log('ten', name)
// const name2 = 'value';
    // console.log("🚀 ~ file: app.js:6 ~ name2:", name2)
// let age = 13;
// age = 23
// console.log("🚀 ~ file: app.js:8 ~ age:", age)
// const ten = 'quyền'


// const : nó ko đc ghi đè tên và giá trị
// let : nó ko đc ghi đè tên và giá trị sẻ được ghi đè


// ------------------ Các kiểu dữ liệu trong js --------------- 
const name = 'nam';
const name2 = 12;
// console.log("🚀 ~ file: app.js:21 ~ name:",typeof name); string
// console.log("🚀 ~ file: app.js:22 ~ name2:",typeof name2); number 
const addNewProduct = 'sfsd'
const info ={
    name: 'Nguyen van A',
    // key : value 
    age : 22
}
console.log("🚀 ~ file: app.js:30 ~ info:", info)
// [] ==> array 
console.log("🚀 ~ file: app.js:30 ~ info.age:", info.age);
console.log("🚀 ~ file: app.js:29 ~ info:", info.name);

const products = [
    {
        title: 'iphone x',
        price: 233,
    },
    {
        title: 'iphone 11',
        price: 533,
    },
    {
        title: 'iphone 12',
        price: 833,
    },

]

console.log("🚀 ~ file: app.js:48 ~ products:", products[4])


// if else 

// if() {

// } else {

// }

const tuoi = 39;

if(tuoi >= 49) {
    console.log('Người già')
} else {
    console.log('Trẻ')
}

// function name(params) {
    
// }


function handleToast (a,b) {
    console.log("🚀 ~ file: app.js:76 ~ handleToast ~ a,b:", a,b)
    // code here
   
    let sum = a + b;
    console.log("🚀 ~ file: app.js:76 ~ sum:", sum) 

}

handleToast(5, 10)
handleToast(55, 10)
handleToast(55555, 10)




