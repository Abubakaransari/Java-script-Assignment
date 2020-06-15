// ****************Q1****************


var Q1 = "-----------------Q1-----------------";
document.write(Q1);

var a = 10;
document.write("<br/> <br/>"+"Result:"+" <br/> "+"The value of a is:" +a+ "<br/>"+" ---------------------------")

var a = 10;
document.write("<br/><br/>"+" The value of ++a is:"+(++a)+"<br/>  Now The value of a is:" +a+
"<br/><br/>"+" The value of a++ is:"+(a++)+"<br/> "+" Now The value of a is:" +a+
"<br/><br/>"+" The value of --a is:"+(--a)+"<br/> "+" Now The value of a is:" +a+
"<br/><br/>"+" The value of a-- is:"+(a--)+"<br/> "+" Now The value of a is:" +a
);


// ****************Q2****************


var Q2 = "<br/> <br/>" +"-----------------Q2-----------------";
document.write(Q2);
  

var a = 3;
var b = 1;
var result = --a - --b + ++b + b--;


document.write("<br/><br/>"+ " a is " + a);
document.write("<br/>"+ " b is " + b);
document.write("<br/>"+ " result is " + result);


// ****************Q3****************


var userName = prompt("Enter your Name")
alert(" Hello " + userName+" have a good day");


// ****************Q4****************



var Q4 = "<br/> <br/>" +"-----------------Q4-----------------";
document.write(Q4);



var a = +prompt( "Enter a number to create Table,");
document.write("<br/><br/> "+"Table of " + a +"<br />")
for (var n=1; n<=10; n++){
document.write(a + "x" + n +"=" + a*n +"<br />")
};



