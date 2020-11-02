//1
// function draw(n) {
//     let star = '';
//     for(let i = 0; i < n; i++) {
//         star += '*';
//     }
//     console.log(star);
// }
// draw(4);

//2
// function draw(n) {

//     for(let row = 0; row < n; row++) {
//         let star = '';
//         for(let column = 0; column < n; column++) {
//             star += '*';
//         }
//         console.log(star);
//         //console.log('\n');
//     }
// }
// draw(5);

// หรือ

// function draw(n) {
//     let result = '';
//     for(let row = 0; row < n; row++) {
//         for(let column = 0; column < n; column++) {
//             result += '*';
//         }
//         result += '\n';
//         //console.log('\n');
//     }
//     return result;
// }



//3 
// function draw(n) {

//     for(let row = 1; row <= n; row++) {
//         let val = '';
//         for(let column = 1; column <= n; column++) {
//             val += column;
//         }
//         console.log(val);
//         //console.log('\n');
//     }
// }
// draw(4);


// หรือ

// Q3
// function draw(n) {
//   let result = '';
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       result += j + 1;
//     }
//     result += '\n';
//   }
//   return result
// }

//4
// function draw(n) {
//   let result = '';
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       result += i + 1;
//     }
//     result += '\n';
//   }
//   console.log(result);
// }
// draw(5);


//5
// function draw(n) {
//     let result = '';
//     for (let i = n; i > 0; i--) {
//       for (let j = n; j > 0; j--) {
//         result += i;
//       }
//       result += '\n';
//     }
//     console.log(result);
//   }
//   draw(5);

//6
// function draw(n) {
//     result = "";
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             result += j + (i - 1) * n;
//         }
//         result += "\n";
//     }
//     console.log(result);
// }
// draw(5);

//7
// function draw(n) {
//     result = "";
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             result += n ** 2 - n * (i - 1) - j + 1;
//         }
//         result += "\n";
//     }
//     console.log(result);
// }
// draw(3);

//8
// function draw(n) {
//     result = "";
//     for (i = 0; i < n; i++) {
//         result += 2 * i + "\n";
//     }
//     console.log(result);
// }
// draw(3);


//9
// function draw(n) {
//     result = "";
//     for (i = 1; i <= n; i++) {
//         result += 2 * i + "\n";
//     }
//     console.log(result);
// }
// draw(3);

//10
// function draw(n) {
//     result = "";
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             result += i * j;
//         }
//         result += "\n";
//     }
//     console.log(result);
// }
// draw(3);


//11
// function draw(n) {
//     result = "";
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (j !== i) {
//                 result += "*";
//             } else {
//                 result += "-";
//             }
//         }
//         result += "\n";
//     }
//     console.log(result);
// }
// draw(3);


//12
// function draw(n) {
//     result = "";
//     for (let i = n; i > 0; i--) {
//         for (let j = 1; j <= n; j++) {
//             if (i !== j) {
//                 result += "*";
//             } else {
//                 result += "-";
//             }
//         }
//         result += "\n";
//     }
//     console.log(result);
// }
// draw(3);


//13
// function draw(n) {
//     result = "";
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (j <= i) {
//                 result += "*";
//             } else {
//                 result += "-";
//             }
//         }
//         result += "\n";
//     }
//     console.log(result);
// }
// draw(3);


//14
// function draw(n) {
//     result = "";
//     for (let i = n; i > 0; i--) {
//         for (let j = 1; j <= n; j++) {
//             if (j <= i) {
//                 result += "*";
//             } else {
//                 result += "-";
//             }
//         }
//         result += "\n";
//     }
//     console.log(result);
// }
// draw(3);

//15
// const draw = (n) => {
//     n = Math.floor(n);
//     let result = ``;
//     let resultSum = ``;

//     for (let i = 1; i <= n; i++) {

//         for (let k = 0; k < i; k++) {
//             result += `*`;
//         }

//         for (let j = n - i; j >= 1; j--) {
//             result += `_`;
//         }
//         resultSum += result + `\n`;
//         result = ``;
//     }
//     console.log(resultSum);
// }
// draw(3);


//16 
// function draw(n) {
//     let numOut = 1;
//     let amountofNum = 1;
//     let resetNum = 1;
//     for (let i = 1; i <= n * 2 - 1; i++) {
//         for (let j = 1; j <= n; j++) {
//             document.write(numOut);
//             amountofNum--;
//             if (amountofNum <= 0) {
//                 numOut = "-";
//             }
//         }
//         document.write("<br>");
//         if (i < n) {
//             resetNum++;
//         } else {
//             resetNum--;
//         }
//         amountofNum = resetNum;
//         numOut = resetNum;
//     }
// }
// let numIn = +prompt();
// draw(numIn);


//17
// const draw = (n) => {
//     n = Math.floor(n);
//     let result = ``;
//     let resultSum = ``;

//     for (let i = 1; i <= n; i++) {

//         for (let k = 0; k < n - i; k++) {
//             result += `-`;
//         }

//         for (let j = n; j > n - i; j--) {
//             result += `*`;
//         }
//         resultSum += result + `\n`;
//         result = ``;
//     }

//     console.log(resultSum);
// }
// draw(3);


//18
// const draw = (n) => {
//     n = Math.floor(n);
//     let result = ``;
//     let resultSum = ``;

//     for (let i = n; i >= 1; i--) {

//         for (let k = 0; k < n - i; k++) {
//             result += `_`;
//         }

//         for (let j = n; j > n - i; j--) {
//             result += `*`;
//         }
//         resultSum += result + `\n`;
//         result = ``;
//     }
//     console.log(resultSum);
// }
// draw(3);


//19
// const draw = (n) => {
//     n = Math.floor(n);
//     let result = ``;
//     let resultSum = ``;

//     for (let i = 1; i < n; i++) {

//         for (let k = 0; k < n - i; k++) {
//             result += `-`;
//         }

//         for (let j = n; j > n - i; j--) {
//             result += `*`;
//         }
//         resultSum += result + `\n`;
//         result = ``;
//     }

//     for (let i = n; i >= 1; i--) {

//         for (let k = 0; k < n - i; k++) {
//             result += `_`;
//         }

//         for (let j = n; j > n - i; j--) {
//             result += `*`;
//         }
//         resultSum += result + `\n`;
//         result = ``;
//     }
//     console.log(resultSum);
// }
// draw(3);


//20
// const draw = (n) => {
//     n = Math.floor(n);
//     let result = ``;
//     let resultSum = ``;
//     let count = 1;

//     for (let i = 1; i < n; i++) {

//         for (let k = 0; k < n - i; k++) {
//             result += `-`;
//         }

//         for (let j = n; j > n - i; j--) {
//             result += `${count}`;
//             count++;
//         }
//         resultSum += result + `\n`;
//         result = ``;
//     }

//     for (let i = n; i >= 1; i--) {

//         for (let k = 0; k < n - i; k++) {
//             result += `_`;
//         }

//         for (let j = n; j > n - i; j--) {
//             result += `${count}`;
//             count++;
//         }
//         resultSum += result + `\n`;
//         result = ``;
//     }
//     console.log(resultSum);
// }
// draw(3);


//21
// const draw = (n) => {
//     n = Math.floor(n);
//     let result = ``;
//     let resultSum = ``;
//     let count = 0;

//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n - 1; j++) {
//             result += `__`;
//         }

//         while (count != 2 * i - 1) {
//             result += `*_`;
//             count++;
//         }

//         resultSum += result + `\n`;
//     }
//     console.log(resultSum);
// }
// draw(3);


//22
// function draw(n) {
//     let star_;
//     let amountOfStar = n * 2 - 1;
//     let positionofStar = 1;
//     let resetstar = 1;
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n * 2 - 1; j++) {
//             star_ = "-";
//             if (j >= positionofStar && j < positionofStar + amountOfStar) {
//                 star_ = "*";
//             }
//             document.write(star_);
//         }
//         document.write("<br>");
//         if (i < n) {
//             resetstar++;
//         } else {
//             resetstar--;
//         }
//         positionofStar++;
//         amountOfStar -= 2;
//     }
// }

// let numIn = +prompt();
// draw(numIn);


//23
// function draw(n) {
//     let star_;
//     let amountOfStar = 1;
//     let positionofStar = n;
//     let resetstar = 1;
//     let resetPosition = n;
//     for (let i = 1; i <= n * 2 - 1; i++) {
//         for (let j = 1; j <= n * 2 - 1; j++) {
//             star_ = "-";
//             if (j >= positionofStar && j < positionofStar + amountOfStar) {
//                 star_ = "*";
//             }
//             document.write(star_);
//         }
//         document.write("<br>");
//         if (i < n) {
//             resetstar += 2;
//             resetPosition--;
//         } else {
//             resetstar -= 2;
//             resetPosition++;
//         }
//         positionofStar = resetPosition;
//         amountOfStar = resetstar;
//     }
// }

// let numIn = +prompt();
// draw(numIn);


//24
// function draw(n) {
//     let out;
//     let numOut = 1;
//     let amountOfStar = 1;
//     let positionofStar = n;
//     let resetstar = 1;
//     let resetPosition = n;
//     for (let i = 1; i <= n * 2 - 1; i++) {
//         for (let j = 1; j <= n * 2 - 1; j++) {
//             out = "-";
//             if (j >= positionofStar && j < positionofStar + amountOfStar) {
//                 out = numOut;
//                 numOut++;
//             }
//             document.write(out);
//         }
//         document.write("<br>");
//         if (i < n) {
//             resetstar += 2;
//             resetPosition--;
//         } else {
//             resetstar -= 2;
//             resetPosition++;
//         }
//         positionofStar = resetPosition;
//         amountOfStar = resetstar;
//     }
// }

// let numIn = +prompt();
// draw(numIn);