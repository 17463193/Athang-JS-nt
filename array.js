const prompt = require("prompt-sync")();

// let names = ['tashi', 'sangay', 'tobden'];


// names[3] = 'yeshi';

// names.push['namgay']; ->insert data at the end of the array\\
// names.unshift['karma'];  ->insert data at the start of the array\\
// names.pop();  ->remove data at the end of the array\\
// names.shift()  -> it will remove data at the beginning of the array\\
// console.log(names);\\


//const cnnot reassign\\
// const names = ['tashi', 'sangay', 'tobden'];


// names[3] = 'yeshi';

// names.push['namgay'];
// names.unshift['karma'];
// names.pop();

// console.log(names);

// let names = ['karma', 'namgay', 'pema',24]

// for(let i = 0; i<names.length;i++){
//    console.log(names[i]);
// }

// let number = [1,2,3,4,5,6,7,8,9,10];

// for(let i = 9; i>=0;i--){

//     console.log(number[i]);
// }

// let number1 = [1,2,3,4,5,6,7,8,9,10];

// for(let i = -1; i<9;i++){
//     i++
//     console.log(number1[i]);
// }

let num = [];

for (let i = 1; i <= 10; i++) {
    // num=[parseInt(prompt('Enter num'+i+":"))]
    num.push(parseInt(prompt('Enter num' + i+ ":")))
}