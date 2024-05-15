//Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.001) interest fee.
//Can you help her calculate her costs? Return the value of what she should be paying.

let transaction = 199;
let calculatePayment = function (transaction) {
  let sumpayment = transaction + 3 + 0.001 * transaction;
  console.log(sumpayment);
  return sumpayment;
};

calculatePayment(transaction);

//Ed would like a way to input 3 names of his friends.
//The output should be a console greeting to his friends saying:
//`Welcome {name1}, {name2}, {name3}.`

let edgreeting = (name1, name2, name3) => {
  console.log(`Welcome ${name1}, ${name2}, ${name3}.`);
};

let friend1 = "A";
let friend2 = "B";
let friend3 = "C";
edgreeting(friend1, friend2, friend3);

//Ed would like to create a function that takes in a birth year and returns the age.
//i.e. 1990 returns 30

let edage = (birthyear) => {
  let age = 2024 - birthyear;
  console.log(age);
  return age;
};

let birthyear = 2000;
edage(birthyear);

//Ed would like to create a function that prints out,
//`Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.`

let edwelcome = (name1, age1, name2, age2, name3, age3) => {
  console.log(
    `Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`
  );
};

let name1 = "A";
let name2 = "B";
let name3 = "C";

let age1 = 21;
let age2 = 22;
let age3 = 33;

edwelcome(name1, age1, name2, age2, name3, age3);

//A student passes if they have a score greater than or equal to 5.
//Create a function that returns a boolean true or false.

let score1 = 6;

let gradeform1 = (score1) => {
  if (score1 >= 5) {
    return true;
  } else {
    return false;
  }
};

console.log(gradeform1(score1));

//A student has an excellent grade if they score higher than 8.
//Add on to your function to print out "Excellent" for scores greater than 8.
let score2 = 10;

let gradeform2 = (score2) => {
  if (score2 >= 8) {
    console.log("Excellent");
    return true;
  } else if (score2 >= 5) {
    return true;
  } else {
    return false;
  }
};

console.log(gradeform2(score2));

//A student has a perfect grade if their score is 11.
//Add on to your function to print out "Perfect" for a score of 11.

let score3 = 11;

let gradeform3 = (score3) => {
  if (score3 === 11) {
    console.log("Perfect");
    return true;
  } else if (score3 >= 8) {
    console.log("Excellent");
    return true;
  } else if (score3 >= 5) {
    return true;
  } else {
    return false;
  }
};

console.log(gradeform3(score3));
