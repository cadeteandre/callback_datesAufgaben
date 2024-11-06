import { format } from "date-fns";

const todayDate = new Date();

//| console.log(todayDate.toLocaleDateString('en-GB'))
//| console.log(todayDate.toLocaleDateString('es-CL'))
console.log(format(todayDate, 'dd-MM-yyyy'));
console.log(format(todayDate, 'dd/MM/yyyy'));

console.log(`${format(todayDate, 'hh:mm')} Uhr`);
console.log(`${todayDate.getUTCHours()}:${todayDate.getUTCMinutes()} Uhr`);