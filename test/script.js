const someDay = new Date(2019, 09, 11);

const year = someDay.getFullYear();
const month = someDay.getMonth();
const day = someDay.getDate();

const monthName = [
  'janeiro', 
  'fevereiro', 
  'março', 
  'abril', 
  'maio', 
  'junho', 
  'julho', 
  'agosto', 
  'setembro', 
  'outubro', 
  'novembro', 
  'dezembro'
];



console.log(year);
console.log(monthName[month]);
console.log(day);

const futureDate = new Date(year, month, day + 30000);

const futureYear = futureDate.getFullYear();
const futureMonth = futureDate.getMonth();
const futureDay = futureDate.getDate();

console.log(futureYear);
console.log(monthName[futureMonth]);
console.log(futureDay);