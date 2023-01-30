let a = prompt ("Введите значение");
a = +a;
(typeof a);
if ((a === NaN)) {
  console.log("Упс, кажется вы ошиблись")
}

if (a % 2 === 0) {
  console.log("четное");
  
}
else if (a % 1 === 0) {
  console.log("нечетное");
  
}
else {
  console.log("Упс, кажется вы ошиблись")
}