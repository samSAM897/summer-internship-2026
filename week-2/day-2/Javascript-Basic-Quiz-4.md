# Assignment Week 2 Day 2

## Theory:

1. ### What are anonymous function in JavaScript?

   Anonymous Function is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

   It is not accesible after creation, but can be accessed using the variable associated with it.

   ```js
   let greet = function () {
     console.log("Hello World!");
   };

   greet();
   ```

2. ### Explain strict comparision and abstract comparision in JavaScript.

   Strict comparision not only checks the value of the two operands being compared but also checks their data type.
   For example:

   ```js
   console.log(3 === "3"); // false
   ```

   Abstract comparision only considers the values of the two operands.
   example:

   ```js
   console.log(3 == "3"); // true
   ```

3. ### Difference between arrow and regular functions.

   Arrow functions do not have arguments binding. Named and rest parameters are heavily relied upon to capture the arguments passed to arrow functions.

   In case of regular functions:

   ```js
   let myFunc = {
     showArgs() {
       console.log(arguments);
     },
   };

   myFunc.showArgs(1, 2, 3, 4); // Doesn't throw error.
   ```

   In case of arrow functions:

   ```js
   let myFunc = {
     showArgs: () => {
       console.log(...arguments);
     },
   };
   myFunc.showArgs(1, 2, 3, 4); // Throws error.
   ```

4. ### What is Hoisting in JS?

   JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

   Hoisting allows functions to be safely used in code before they are declared.

   Variable and class declarations are also hoisted, so they too can be referenced before they are declared.

5. ### JavaScript is a garbage collected programming language, explain how?

   JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (garbage collection). This automaticity is a potential source of confusion: it can give developers the false impression that they don't need to worry about memory management.

6. ### Explain Shallow vs Deep copy in JS?

   A shallow copy means that the copied variable values is still connected to the original variable while a deep copy means that those values are now disconnected.

   Shallow Copy example:

   ```js
   let person = {
     firstName: "John",
     lastName: "Doe",
     address: {
       street: "North 1st street",
       city: "San Jose",
       state: "CA",
       country: "USA",
     },
   };

   let copiedPerson = Object.assign({}, person);

   copiedPerson.firstName = "Jane"; // disconnected

   copiedPerson.address.street = "Amphitheatre Parkway"; // connected
   copiedPerson.address.city = "Mountain View"; // connected

   console.log(copiedPerson);
   ```

   Deep copy example:

   ```js
   let person = {
     firstName: "John",
     lastName: "Doe",
     address: {
       street: "North 1st street",
       city: "San Jose",
       state: "CA",
       country: "USA",
     },
   };

   let copiedPerson = JSON.parse(JSON.stringify(person));

   copiedPerson.firstName = "Jane"; // disconnected

   copiedPerson.address.street = "Amphitheatre Parkway";
   copiedPerson.address.city = "Mountain View";

   console.log(person);
   ```

7. ### What is Object.freeze ?

   The Object.freeze() method will freeze and object i.e. the object can no longer be changed. Freezing prevents new properties being added to the object, existing ones being removed from it, prevents changing the enumerability, configurability or writability of existing properties.

   ```js
   const obj = {
     prop: 42,
   };

   Object.freeze(obj);

   obj.prop = 33;
   // Throws an error in strict mode

   console.log(obj.prop);
   // expected output: 42
   ```

<hr>

## Programs:

1. ### Write a function that generates a random number between two ranges, -100 to 0 and 800 - 900.

   ```js
   function radomInTwoRange(min1, max1, min2, max2) {
     // your implementation here -> return number
     var ranges = [
       {
         min: -100,
         max: 0,
       },
       {
         min: 800,
         max: 900,
       },
     ];

     ranges.forEach((e) => {
       console.log(Math.floor(Math.random() * (e.max - e.min + 1) + e.min));
     });
   }
   ```
