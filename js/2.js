function calculateAge(yearBorn) {
  var currentTime = new Date();
  var currentYear = currentTime.getFullYear();
  // console.log(currentYear);
  return currentYear - yearBorn;
}

var name = prompt("Enter your name: ");

var yearBorn = prompt("Enter the year you were born: ");

var age;
age = calculateAge(yearBorn);
console.log(name + " is " + age + " year old");
var message = "";

if (age < 18) {
  message += "You are";
  var i = 0;
  while (i < 5) {
    message += " very";
    i++;
  }
  message += " young";
  console.log(message);
}
