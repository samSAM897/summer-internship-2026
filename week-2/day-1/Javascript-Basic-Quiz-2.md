# Assignment 2 Week 2 Day 1

## Theory:

1. ### Why do we use functions in JS?

   The use of functions is a great way of improving the re-usability of code. Instead of writing code again and again when we do a repetitive task, we can just declare a function which will act as a definition and we can just call/invoke it everytime we need to do that specific task.

2. ### What is Function Invocation?

   The code inside a function is not executed during its definition.
   It will only get executed when the function in invoked. A function can be invoked in two ways:

   - Invoking as a function:

     ```js
     function myFunc(var) {
      return var + 1;
     }

     myFunc(10);
     ```

   - Invoking as a method:

     ```js
     var myObj = {
       var: value,
       functionName: function () {
         return this.var;
       },
     };

     myObj.functionName();
     ```

3. ### Does a function behave as an Object? Give examples.

   Yes, In JS the function can behave as an object as they are first-class objects. So one can assign functions to variables, array elements and other objects.
   For ex:

   ```js
   let circle = {
     radius: 10,
     area: function () {
       return Math.PI * this.radius * this.radius;
     },
   };

   console.log(circle.area()); // 314.15..
   console.log(typeof circle.area); // function
   ```

4. ### What are Events in JS?

   Events in HTML are when something happens to HTML elements.
   Javascript can **"react"** to these events.
   <br>
   An event in HTML can be something the browser does, or something a user does. Some common examples of Events:

   - HTML page has finished loading.
   - HTML input field was changed.
   - HTML button was clicked.

   Using JavaScript, we can execute code when these events occur.

   For example:

   ```html
   <div id="div-to-edit" onclick="doSomething"></div>
   ```

   ```js
   const doSomething = (e) => {
     e.preventDefault();
     const clickedDiv = docuement.getElementById("div-to-edit");
     clickedDiv.innerHTML = Date();
   };
   ```

5. ### What is a string?

   A string is a series/collection of characters stored together in a single variable.
   For example: "John Doe".

   String indexes are zero-based.
   <br>
   Normal String don't have methods or properties, but strings in javascript are treated as objects therefore they have methods and properties like objects.

6. ### What is an Array? Is is static or dynamic in JavaScript?

   The array object in js is used to store multiple values in a single variable. They are zero-indexed.

   Arrays in JS are dynamic by nature meaning, they can be modified even after definition, and can increase or decrease in size.

7. ### Difference between Map and Set?

   A map is a collection of keyed data items, just like an Object. But map allows keys of any type.

   Methods and Properties of map:

   - `new Map()`: creates a new Map.
   - `map.set(key, value)`: This stores the value by the key.
   - `map.get(key)`: Gets the value stored in the map for the particular key.
   - `map.has(key)`: Returns `true` if the key exists, `false` otherwise.
   - `map.delete(key)`: Removes the value by key.
   - `map.clear()`: Deletes everything from the map.
   - `map.size`: Returns the current size of the map.

   Example Map.

   ```js
   let map = new Map();
   map.set(1, "Nathan");
   map.set("Lorem", "Ipsum");
   ```

   <br>
   A Set is a special type of collection, where each value may occur only once.

   Methods and Properties of Set:

   - `new Set(iterable)`: creates the set and if an iterable object, copies values from it into the set.
   - `set.add(val)` and `set.delete(val)`: The add method adds a value and returns the set. The delete method will remove the value and will return true if the value existed at the moment the function was called.
   - `set.has(val)`: Returns true if the Set has the value.

   Example Set:

   ```js
   let set = new Set();
   let john = { name: "John" };
   let mary = { name: "Mary" };
   set.add(john);
   set.add(mary); // Adds mary to the set.
   ```

8. ### What is the difference between Array and Map?

   The array object in js is used to store multiple values in a single variable. They are zero-indexed.

   ```js
   let arr = [];
   // Or
   let arr2 = new Array();
   ```

   Arrays are used to store data in a more simpler list like way.

   A map is a collection of keyed data items, just like an Object. But map allows keys of any type.

   Example Map.

   ```js
   let map = new Map();
   map.set(1, "Nathan");
   map.set("Lorem", "Ipsum");
   ```

9. ### What are array methods? List a few names.

   Methods in arrays are ways to interact with the data in an array.
   Using methods, you can change the properties of an array.

   A few common array methods are:

   - `push`: Used to insert data at the last of an array.
   - `pop`: Used to remove the last entry in an array.
   - `shift`: Removes the first element and returns it.
   - `unshift`: Adds the element to the beginning of the array.
   - `slice`: Slices out a part of the array.

10. ### In how many ways can we traverse through an array in javascript?

    There are many ways in which we can iterate over an array, but the most common ones are:

    - Using Loops: We can use `for`, `while` loops to iterate over an array.

      ```js
      const arr = [1, 2, 4, 5];

      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
      } // prints: 1, 2, 4, 5.
      ```

    - Using forEach: We can use the forEach method to iterate over an array.

      ```js
      const arr = [2, 4, 6, 8];
      arr.forEach((num) => {
        console.log(num);
      }); // Prints: 2, 4, 6, 8.
      ```

    - Using `map()`: We can use the map function to create a mapping and thus print it.

      ```js
      const arr = [1, 3, 5, 7];

      const square = (x) => Math.pow(x, 2);
      const squares = arr.map(square);

      console.log(arr); // 1, 3, 5, 7.
      console.log(squares); // 1, 9, 25, 49.
      ```

<hr>

## Programs:

1. ### Reverse an array.

   ```js
   let arr = [1, 3, 5, 7];
   arr = arr.reverse();
   console.log(arr); // prints: 7, 5, 3, 1
   ```

2. ### Explain properties of join in array.

   ```js
   const arr = [8, 8, 8, 8];
   let combineArr = arr.join(".");
   console.log("DNS of Google is: " + combineArr); // Prints: 8.8.8.8
   ```

3. ### Show all the values of an array in a html webpage using DOM and forEach method

   ```js
   const divToEditInfo = document.getElementById("edit-me");

   const showArrayValues = (arr) => {
     const newDiv = document.createElement("div");
     arr.forEach((val) => {
       newDiv.innerText += val;
     });
     divToEditInfo.appendChild(newDiv);
   };
   ```

4. ### Merge two Sets in JS.

   ```js
   const set1 = new Set([1, 3, 5]);
   const set2 = new Set([2, 4, 6]);

   const set3 = new Set([...set1, ...set2]);
   console.log(set3); // Prints: Set { 1, 3, 5, 2, 4, 6 }
   ```
