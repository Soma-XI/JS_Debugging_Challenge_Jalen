studentName = "Jalen";
studentAge = 21;
isEnrolled = true; 

document.write("<h2>Student Info</h2>");
document.write("Name: " + studentName + "<br>"); 
document.write("Age: " + studentAge); 
document.write("Enrolled: " + isEnrolled); 

let ageString = String(studentAge);
document.write("Age Type: " + typeof (ageString)); 



num1 = Number(prompt("How many letters in your name"));
num2 = Number(prompt("What year were you born?"));


document.write("Sum: " ,+ num1 + num2  );




userAge = Number(prompt("Enter your age"));
if (userAge >= 18) { 
    document.write("You can vote!"); 
} else { 
    document.write("Sorry, you can't vote."); 
}






for (i = 1; i < 10; i++) {

    document.write(i);
}







let num =0;
while (num < 10) {
num = Number(prompt("Only input a number greater than 10"));

}
  