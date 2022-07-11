# Assignment 2 Week 2 Day 1

## Theory:

1.  ### What is Javascript?

    JavaScript or JS is a Programming Language which is one of the core technologies of the World Wide Web, along with HTML and CSS.
    More than 95% of modern web sites use JavaScript on the client side to provide functionality to the website.

2.  ### What is the difference between _let_ and _var_?

    - let is block-scoped i.e. variables defined with let can be only used in the block of definition. In case of var, var are function-scoped i.e. a var declared inside a function can be used anywhere in the function.

      ```js
      function greetUser(userName) {
        let greeting = "Hello ";
        if (greeting == "Hello ") {
          let completeMsg = greeting + userName;
          console.log(completeMsg);
        }

        console.log(completeMsg); // This will throw an error.
        // The error happens because completeMsg is undefined for the
        // current scope.
      }
      ```

    - let doesn't allow us to re-define variables whereas in case of var we can re-define variables.

      ```js
      var b = 5; // 5
      var b = 2; // 2

      let a = 5;
      let a = 3; // Throws error.
      ```

    - let doesn't allow hoisting whereas var allows hoisting.

      ```js
      console.log(b);
      var b; // undefined.

      console.log(a);
      let a = 3; // Uncaught ReferenceError: a is not defined.
      ```

3.  ### Why do prefer _const_ over _var_?

    If you wish for a variable to be re-definable, one can prefer using var.
    The usage of const makes sure that the variable binding is immutable but the object itself can change whenever you like.

4.  ### What is the use of JavaScript in Web Browsers?

    Using JavaScript, we can transform a website from having very basic functionality to be whatever we wish to be. In terms of human analogy, JavaScript is the brain of the website.

5.  ### What are Objects?

    Objects are one of the available data types in JS. It is used to store various keyed collections and more complex entities. Objects can be created using the `Object()` constructor.
    To create a sample object:

    ```js
    const person = {
      name: "John Doe",
      age: 52,
      jobStatus: "Retired",
    };
    ```

6.  ### What is an Array and how is it different from an Object in JavaScript?

    An array is a special variable, that can hold more than one value. In Programming languages such as C++, Java,etc. Arrays are generally collection of similar types of data. Arrays in JS are also objects.

    - Arrays in JS are resizable and can contain a mix of different data types.
    - JS arrays are not associative arrays.
    - Arrays in JS are zero-indexed.

    To create a sample array in JS.

    ```js
    const exampleArr = new Array("This", "is", "an", "example");
    ```

    Objects must be used when you wish to access data in a key-value pairing and use arrays when you wish to create a simple list of things.

7.  ### What is a function?

    A function is a block of code that is designed to perform a specific task.
    The usage of a function also helps in re-use of code rather than writing it each time we wish to use it.

    To declare a function:

    ```js
    function nthFibonacci(inpNum) {
      if (inpNum <= 1) return inpNum;
      return nthFibonacci(inpNum - 2) + nthFibonacci(inpNum - 1);
    }
    ```

8.  ### How can we implement call by value and call by reference in Javascript?

    To implement call by value, see the code snippet below:

    ```js
    let originalVal = 10;
    function updateOriginalVal(originalVal) {
      originalVal += 10;
      console.log(originalVal);
    }

    updateOriginalVal(originalVal); // 20
    console.log(originalVal); // 10
    ```

    As you can see, the value of the `originalVal` variable did not change, rather it was a copy of the original variable, whose value gets changed.

    <br>

    To implement call by reference, see the code snippet below:

    ```js
    let myObj = {
      val: 10,
    };

    function updateVal(objRef) {
      objRef.val += 10;
    }

    console.log(myObj.val); // 10
    updateVal(myObj);
    console.log(myObj.val); // 20
    ```

9.  ### What are primitive data types in JS?

    A primitive data type is a data type that is not an object and has no methods or properties. There are 7 primitive data types in JS: string, number, bigint, boolean, undefined, symbol and null.

10. ### What is DOM ?

    DOM stands for Document Object Model, with the help of DOM JS can access and change all the elements of a HTML document. It is constructed as a tree of Objects.

    With the object model, JS gets all the power it needs to create dynamic web pages.

11. ### Why do we need DOM?
    DOM allows JS to be powerful enought to access and change everything that can be changed in a HTML document i.e. we can change the Styling, create new elements, etc. Being able to use DOM gives the programmer infinite possibilities and thus allows a programmer to be able to create truly dynamic web pages.

<hr>

## Programs:

1. ### Average of array nums in JS.

   ```js
   const findArrayAvg = (arr) => {
     let arrSum = 0;
     arr.forEach((num) => {
       arrSum += num;
     });

     let arrLen = arr.length;
     return arrSum / arrLen;
   };

   const sampleArr = [10, 12, 14, 14, 22, 25, 31, 29, 12];
   console.log(findArrayAvg(sampleArr));
   ```

2. ### Swap variables using reference.

   ```js
   function swapUsingReference(objRef) {
     let temp = objRef.var2;
     objRef.var2 = objRef.var1;
     objRef.var1 = temp;
   }

   const sampObj = {
     var1: 5,
     var2: 2,
   };
   console.log(sampObj);
   swapUsingReference(sampObj);
   console.log(sampObj);

   // or you can try something like this:
   let a = 5;
   let b = 2;
   console.log(a + " ," + b);
   [a, b] = [b, a];
   console.log(a + " ," + b);
   ```

3. ### Print the fibonacci sequence.

   ```js
   function printFibonacciSequence() {
     let inputNum = parseInt(prompt("Enter a number: "));
     let a = 0,
       b = 1;
     let nextVal;
     for (let i = 1; i <= inputNum; i++) {
       console.log(a);
       nextVal = a + b;
       a = b;
       b = nextVal;
     }
   }

   console.log("Fibonacci sequence: ");
   printFibonacciSequence();
   ```

4. ### Sort an array in both ascending order and descending order.

   To sort in ascending order:

   ```js
   const arr = new Array("Orange", "Kiwi", "Zucchini", "Banana");
   arr.sort();
   console.log(arr); // Prints : [Banana, Kiwi, Orange, Zucchini].
   ```

   To sort in descending order:

   ```js
   const arr = new Array("Orange", "Kiwi", "Zucchini", "Banana");
   arr.reverse();
   console.log(arr); // Prints: [Zucchini, Orange, Kiwi, Banana].
   ```

5. ### Show a variable value in an HTML webpage using DOM.

   ```html
   <div class="content">
     Slim
     <span id="edit-me"> </span>
   </div>
   ```

   ```js
   const editableSpan = document.getElementById("edit-me");
   const nameToInsert = "Shady";
   editableSpan.innerHTML = `${nameToInsert}`;
   ```
