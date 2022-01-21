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
let str = 'When do you start work?';

if (str.indexOf("When") !=-1){
    console.log('found');
}



