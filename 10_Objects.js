// object literal

// const key = Symbol("k1")

// const bio = {
//     name : "Harsh" ,
//     age : 18 ,
//     [key] : "k1" ,           //For symbol use []
//     college : "iiitn" ,
//     pass : true ,
//     marks : [23,21,20]
// }

// console.log(bio.name)  // Dikkat aa skti hai
// console.log(bio["name"]);

// console.log(bio);
// console.log(bio[key]);
// console.log(typeof bio[key]);

// bio["name"] = "Srijal"
// console.log(bio);

// Object.freeze(bio)
// bio["name"] = "Srijal"
// console.log(bio);

// bio.greet = function(){
//     console.log("Hey");
// }

// console.log(bio);
// console.log(bio.greet());

// bio.greet2 = function(){
//     console.log(`Hello ${this.name}`);
// }
// console.log(bio.greet2());

/*//++++++++++++++++++++++++++++++++++++++++++++++++++=//*/

// const tu = new Object()
// const nobj = {}

//Nesting object

// const nes_obj = {
//     name : "One piece" ,
//     chars : {
//         main : {
//             "first" : "Luffy" ,
//             "second" : "zoro"
//         }
//     }
// }

// console.log(nes_obj);
// console.log(nes_obj.chars.main.first);

// let o1 = {1 : "Harsh" , 2 : "Kinnari"}
// let o2 = {3 : "Float" , 4 : "y"} 

// const o3 = {o1,o2}
// const o3 = Object.assign({},o1,o2)
// console.log(o1);

// const o3 = {...o1 ,...o2 }

// console.log(o3);

// console.log(Object.keys(o3));
// console.log(Object.values(o3));
// console.log(Object.entries(o3));
// console.log(o3.hasOwnProperty('1'));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const des_obj = {1 : "Harsh", 2 : 299, 3 : "yhwab"}
const {1 : n} = des_obj
console.log(n);
