let  month = prompt("Enter the month's first 3 letters (in form Jan, Feb, etc.). ");

if (month === "Dec" || month === "Jan" || month === "Feb") {
   alert("You are in Winter");
 } else if (month === "Mar" || month === "Apr" || month === "May") {
   alert("You are in Spring");
 }  else if (month === "June" || month ==="July" || month === "Aug") {
   alert("You are in Summer");
} else if (month === "Sept" || month ==="Oct" || month === "Nov") {
   alert("You are in Fall ");
 } else
   alert("I do not know your season.");