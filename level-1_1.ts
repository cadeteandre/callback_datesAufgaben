const date1 = document.querySelector('.date_1') as HTMLParagraphElement;
const date2 = document.querySelector('.date_2') as HTMLParagraphElement;
const date3 = document.querySelector('.date_3') as HTMLParagraphElement;
const date4 = document.querySelector('.date_4') as HTMLParagraphElement;

date1.innerHTML = `${new Date("September 2, 2019 09:00:00")}`;
date2.innerHTML = `${new Date(0)}`;
date3.innerHTML = `${new Date(31556908800)}`;
date4.innerHTML = `${new Date(86400000)}`;