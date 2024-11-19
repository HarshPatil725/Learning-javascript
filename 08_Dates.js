let date = new Date()

// console.log(date);
// console.log(date.toString());
// console.log(date.toLocaleString()); 
// console.log(typeof date)

// let newdate = new Date(2023,1,24,5,3)
// console.log(newdate.toLocaleString());

date = new Date("02-14-2024")
console.log(date);

// mytime = Date.now()
// console.log(mytime)
// console.log(date.getTime());
// console.log(Math.floor(mytime/1000));

// console.log(mytime-date.getTime());

console.log(date.toLocaleString('default',{
    weekday : "long" ,
}))
 