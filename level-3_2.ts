import { differenceInYears, differenceInHours, differenceInSeconds, format } from 'date-fns';

const date_1 = new Date(0);
const date_2 = new Date();

console.log(date_1);
console.log(date_2);

console.log(differenceInYears(date_2, date_1));
console.log(differenceInHours(date_2, date_1));
console.log(differenceInSeconds(date_2, date_1));


const myBirthday = new Date('1994-08-04T15:05:00');
const myAge = differenceInYears(date_2, myBirthday);
const myAgeIn2007 = differenceInYears(new Date(2007, 3, 7), myBirthday);
console.log(`Ich bin ${myAge} Jahre alt`);
console.log(`In 2007 I was ${myAgeIn2007} years old`);

console.log(format(myBirthday, 'dd.MM.yyyy hh:mm:ss'));
console.log(format(myBirthday, 'dd.MM.yyyy hh:mm'));
console.log(format(myBirthday, 'dd.MM.yy'));
console.log(format(myBirthday, 'dd. MMMM yyyy'));
console.log(format(myBirthday, 'hh:mm'));
console.log(myBirthday.getDay() === 4 ? 'Donnerstag' : null);
console.log(myBirthday.getMonth() === 7 ? 'August' : null);
console.log(`${myBirthday.getDate()} des ${myBirthday.getMonth() === 7 ? 'August' : null} im Jahre des Herrn ${myBirthday.getFullYear()}`);