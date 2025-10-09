# JavaScript Foundations — Lesson 2

### 🎯 Learning Objectives

By the end of this lesson, you will be able to:

1. Define and call functions to repeat code.
2. Use parameters to make functions flexible and dynamic.
3. Understand return values through real-world analogies.
4. Write conditional statements inside functions.
5. Connect JavaScript with HTML elements for interactivity.
6. Create and modify arrays to store and manage multiple values.

---

## 1. Quick Recap

Last time, we learned variables and operators — how to store and calculate data. But so far, our code runs instantly when the page loads. Today, we’ll learn how to control *when* and *how* our code runs — using functions.

```jsx
console.log("Welcome to JavaScript!");
console.log("Welcome to JavaScript!");

```

This repeats code. Let’s see how a function helps us do this better.

---

## 2. Functions — Repeating Tasks

A **function** is like a tiny machine — it performs a job whenever we tell it to.

```jsx
function greet() {
  console.log("Welcome to our website!");
}

```

This part is the **function definition** — we’re teaching JavaScript what to do.

Now call it:

```jsx
greet();
greet();

```

This is the **function call** — it tells JavaScript to *do* that job.

---

### Make Functions Dynamic with Parameters

Right now, our function always does the same thing. What if we want it to say hello to *different* people?

```jsx
function greet(name) {
  console.log("Welcome, " + name + "!");
}

greet("Alex");
greet("Riya");

```

Parameters make functions flexible. The function’s job stays the same, but the data it works with changes. This makes your function infinitely adaptable.

Example with HTML input:

```html
<input type="text" id="nameInput" placeholder="Enter your name" />
<button onclick="sayHello()">Say Hello</button>

<script>
function sayHello() {
  let name = document.getElementById("nameInput").value;
  console.log("Welcome, " + name + "!");
}
</script>

```

Here, the function reads input from the page instead of us typing it in.

---

### Return Values — The Receipt Analogy

Sometimes, we don’t just want a function to *do* something — we want it to *give something back.*

Imagine using a POS machine at a store. You swipe your card — the machine processes payment. You can choose **No Receipt** (the function just runs) or **Print/Email Receipt** (the function gives something back). That ‘receipt’ is the **return value**.

```jsx
function calculateTotal(price, quantity) {
  let total = price * quantity;
  return total; // returning the result like a receipt
}

let result = calculateTotal(5, 3);
console.log("Your total is $" + result);

```

When we return a value, we can store or reuse it elsewhere in our program.

### Return - always the final statement !

Remember that any statement after a return statement within a function is invalid and will not run!

---

## 3. Conditionals Inside Functions

Functions can also make decisions. Let’s say our function gives different messages depending on age.

```jsx
function checkAge(age) {
  if (age >= 18) {
    console.log("You are an adult.");
  } else {
    console.log("You are a minor.");
  }
}

checkAge(21);
checkAge(15);

```

Functions can include logic, so they react differently to different data.

---

### Use Conditionals + Parameters Together

```jsx
function calculateGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 75) {
    return "B";
  } else if (score >= 60) {
    return "C";
  } else {
    return "Needs Improvement";
  }
}

let myGrade = calculateGrade(82);
console.log("Grade:", myGrade);

```

Now we’ve combined everything — parameters, logic, and return.

---

### Function Calling Another Function

We can make our code cleaner by breaking it into smaller pieces — one function can call another.

```jsx
function calculateGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 75) return "B";
  else if (score >= 60) return "C";
  else return "Needs Improvement";
}

function showMessage() {
  let grade = calculateGrade(70);
  console.log("Your grade is: " + grade);
}

showMessage();

```

This shows how complex tasks can be split into small, reusable parts.

---

### Connect Function to a Button (Bringing It All Together)

Finally, let’s connect everything to a webpage.

```html
<h3>Grade Checker</h3>
<input type="text" id="scoreInput" placeholder="Enter your score" />
<button onclick="showGrade()">Check Grade</button>

<script>
function calculateGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 75) return "B";
  else if (score >= 60) return "C";
  else return "Needs Improvement";
}

function showGrade() {
  let score = Number(document.getElementById("scoreInput").value);
  if (isNaN(score)) {
    alert("Please enter a valid number.");
    return;
  }

  let grade = calculateGrade(score);
  alert("Your grade is: " + grade);
}
</script>

```

Now we’ve connected everything — function definition, parameters, return, conditionals, and events — into one working webpage.

---

## 4. Arrays

An array is like a shelf that holds many items together.

```jsx
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // apple
console.log(fruits[2]); // cherry

```

### Adding and Removing Items

```jsx
let fruits = ["apple", "banana"];
fruits.push("cherry"); // add to end
fruits.unshift("mango"); // add to start
console.log(fruits);

fruits.pop(); // remove last
fruits.shift(); // remove first
console.log(fruits);

```

### slice() and splice()

```jsx
let colors = ["red", "green", "blue", "yellow"];
let warmColors = colors.slice(0, 2);
console.log(warmColors);

colors.splice(2, 1, "purple");
console.log(colors);

```

`slice()` copies a section, while `splice()` changes the original array.

---

## 🧠 Summary

- Functions let you organize and repeat tasks easily.
- Parameters make them flexible.
- Return values give back useful results.
- Conditionals add decision-making inside functions.
- Connecting to buttons ties it all to user interaction.
- Arrays hold multiple related values.

---

✅ **End of Lesson 2 — JavaScript Foundations (Functions First Flow)**