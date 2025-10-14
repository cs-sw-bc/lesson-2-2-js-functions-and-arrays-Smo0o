//Part1: function definition
function greet() {
    let userName = document.getElementById("name").value;
    console.log(`${userName}, Welcome to my website`);
    // Created username variable, takes name from the id within the input box.
    // Functions Needs to be triggered/called by something
}

greet(); // Part 2: function call
// A Function will work only when called, otherwise it simply sleeps
greet();
// Limitation - greet function can do only one thing, but one way.

function greetUser(name) {
    console.log(`Hello ${name}, to my website`);
}

greetUser("Daniel");
// ${} is used instead of ""+name

function plus(x, y) {
    z = x + y;
    console.log(`Sum of ${x} and ${y} is ${z}`);

}
plus(155, 271);


function minus(x, y) {
    z = x - y;
    return z;
}

let difference = minus(95, 71);
console.log(`The difference is ${difference}`)

function calculateGrade() {
    let score = document.getElementById("score").value;
    let attendance = document.getElementById("attendance").value;
    let grade = null;
    if (score >= 90) { // start at highest number as js reads top to bottom
        grade = "A+";
    } else if (score >= 80) {
        grade = "A";
    } else if (score >= 70) { // 70 - 79
        grade = "B";
    }
    else if (score >= 60 && attendance >= 95) {
        grade = "C";
    } else if(score>=55 || attendance==100){
        grade= "C-"
    }

    else {
        grade = "F";
    }

    alert(`Your grade is ${grade}`);
} // Score and grade dies at the end of the function
 // || condition means or

  // Called an array, better than creating tons of variables
 // Array index = position of the array [0, 1 ,2, 3, 4] (ALWAYS starts with 0)

 let students = ["Nate","Daniel","Samuel"];
 let scores = [87, 99, 98];
console.log(scores[2])
scores[2]=100;
console.log(scores);

// add element
scores.push(85); // adds to the end of an array
console.log(scores);
scores.unshift(65);
console.log(scores);