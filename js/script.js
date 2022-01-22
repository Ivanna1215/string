'use strict'
// Приклади з юнікодом
// console.log ('\u00A9');
// console.log ('\u{1F60D}');
// Довжина рядка
// console.log (`My\n`.length);
// console.log (`Ivanna`.length);
// console.log (`11.09.1990`.length);
// console.log (`portfolio__1109`.length);
// console.log (`?\m`.length);
// console.log (`/?`.length);
// console.log (`flat`.length);
// console.log (`room`.length);
// console.log (`house`.length);
// console.log (`bedroom`.length);
// console.log (`kitchen`.length);
// console.log (`loving room`.length);
// console.log (`hall`.length);
// console.log (`freezer`.length)

// Доступ до символів
// let str = `Hello`;
// отримуємо перший символ
// console.log (str[0]);
// console.log (str.charAt(0));
// let Ivanna = 'flat';
// console.log (Ivanna.charAt(1));
// console.log (Ivanna.charAt(5));
// console.log (Ivanna.charAt(3));
// console.log (Ivanna[0]);
// let name = 'Anna';
// console.log (name[0]);
// console.log (name[1]);
// console.log (name[2]);
// console.log (name[3]);
// console.log (name[4]);
// console.log (name.charAt(3));

// Також можна перебрати рядок посимвольно використовуючи for...of
// for (let str of 'Hello') {
//     console.log (str);  
// }

// for (let char of 'Iva') {
//     console.log (char);
// }

// for (let str of '123456789') {
//     console.log (str);
// }

// Зміна регістру
// console.log ('Ivanna'.toUpperCase() );
// console.log ('Shelf'.toLowerCase() );
// console.log ('freezer'[3].toUpperCase() );

// Пошук підрядки
// Перший метод - str.indexOf 
// let str = 'How do you like it?';
// console.log (str.indexOf ('How'));
// console.log (str.indexOf('you'));
// console.log (str.indexOf ('like',2));
// index.of в циклі
// let str = 'When do you finish work?';
// ціль пошуку
// let target = 'you'; 
// let pos = 0;
// while (true) {
//     let foundPos = str.indexOf (target,pos);
//     if (foundPos==-1) break;
//     console.log (`found here : ${foundPos}`);
//     pos = foundPos + 1; 
// }
// let str = 'When do you start work?';

// if (str.indexOf("When") !=-1){
//     console.log('found');
// }

// console.log ('How do you like it?'.includes ('like') );
// console.log (' When do you start run?'.includes ('work') );

// substring,substr i slice
// str.slice (start [,end]) Повертає частину строки від start не включаючи end.
// let str = 'kitchen';
// console.log (str.slice (0,4));
// console.log (str.slice(-4,-2));

// правильне порівняння
// console.log ('Ivanna'.localeCompare ('work') );
// console.log ('hall'.localeCompare('Freezer') );
// console.log ('mirror'.localeCompare ('kettle') );

// Task 1 Зробити перший символ великим
function ucFirst (name) {
let partOne = (name[0].toUpperCase ());
// console.log (partOne);
let  partTwo = (name.slice (1));
// console.log (partTwo);
let str = partOne + partTwo
console.log (str);
}
ucFirst ('ivanna');

// Коротке правильне рішення

function ucFirst (str) {
    if (!str) return str;
    return str [0].toUpperCase()+str.slice(1);
}
console.log (ucFirst ('Ivanna'));

// Перевірка на спам Task 2
 function   checkSpam (strin) {
     strin = strin.toLowerCase();
if (strin === 'viagra' || strin ==='xxx') {
    return true;
} else {
    return false;
}
}
console.log (checkSpam ('xXx'));

// Правильне коротке рішення
function   checkSpam (lowStr) {
   let lowerStr = lowStr.toLowerCase ();
   return lowerStr.includes ('viagra') || lowerStr.includes ('xxx');
}
console.log (checkSpam ('xXx it is good'));

// Усічення рядка Task 3

function truncate (sTr,maxlength) {
    let strLength = sTr.length;
    if (strLength<maxlength){
        return sTr;
    } else {
let newStr = sTr.slice(0,maxlength-1) + '...';
        return  newStr;
    }
}
console.log (truncate ('Ivanna',4));


// Правильне коротке рішення

function truncate(str, maxlength) {
    return (str.length > maxlength) ? 
      str.slice(0, maxlength - 1) + '…' : str;
  }

  console.log (truncate ('Iva',4));


console.log ('Iva'.length)
let newStr = 'Ivanna'.slice(0,4-2) + '...';
console.log (newStr);





// Регістр має значення
// let text = 'Thursday';
// let searchText = 'tH';
// console.log (text.toLowerCase().includes(searchText.toLowerCase()));
