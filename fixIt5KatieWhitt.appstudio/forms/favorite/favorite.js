let userCourse = prompt("Enter your favorite course name and number from this semester please. ");
let userTeacher = prompt("Enter your favorite professor name of that course please. ");

if (userCourse == "BIA 375" && userTeacher == "Dr. Corritore") {
   alert(`Your favorite course this semester is ${userCourse}, which is taught by ${userTeacher}.`);
 } else {
   alert(`Your favorite course this semester is NOT ${userCourse}.`);
}   