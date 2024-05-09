//Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)
let firstNum=4;
let secondNum=6;
if(firstNum < secondNum)
    console.log("Maximum Number is: ", secondNum );
else
console.log("Maximum Number is: ", firstNum);


//Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take a single variable and check using if else condition)

let number=6;
if(number < 0)
    console.log("Negative Number is: ", number);
else if(number===0)
    console.log("Number is Zero: ", number);
else
console.log("Positive Number is:", number);

//Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)

let num=25;
if(num%10===0)
    console.log(num,"Number is Divisible by 10");
else
console.log(num, "Not Divisible");

//Solve the problem with Javascript  to check whether a number is even or odd. 

let numEO=6;
if(numEO%2===0)
    console.log("Even Number is: ", numEO);
else
console.log("Odd Number is: ", numEO);

//Solve the problem with Javascript  to check whether a character is in the alphabet or not.

let character="C";
if((character>='A' && character<='Z') || (character>='a' && character<='z'))
    console.log("This is Alphabet");
else
console.log("This is Not Alphabet");

//Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)

let tem=26;
if(30 <= tem)
    console.log("Temperature is Hot");
else if(25 >= tem)
    console.log("Temperature is Cold");
else
console.log("Temperature is Normal");

//Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)

let a=20;
let b=20;
let c=80;
if(a>b && a>c)
    console.log("Maximum Number is: ", a);
else if(b>a && b>c)
    console.log("Maximum Number is: ", b);
else if(a==b==c)
    console.log(" Number is Equal ");
else
console.log("Maximum Number is: ", c);

//Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.

let x=2;
(x%2==0)?console.log("Even Number"):console.log("Odd Number");

//Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.
let numOne=40;
let numTwo=60;
if(numOne>30 && numTwo>30)
    console.log("Both greater than 30");
else
console.log("Both not greater than 30");

//Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)

let age=20;
if(age>=13 && age<=19)
    console.log("Teenager");
else
console.log("Not a teenager");

