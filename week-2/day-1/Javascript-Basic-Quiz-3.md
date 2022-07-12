# Assignment 3 Week 2 Day 1

## Theory:

1. ### Explain as much as you know about objects in js.

   Objects in javascript are like real-life objects. An object is a standalone entity, with properties and type. Compare it with a car, for example. A car has a color, chasis number and engine model, an international standard number. Similarly, objects in javascript can have properties, which define their characteristics.

   A js object has properties associated with it. A property of an object can be explained as a variable that is attached to an object. To access the properties of an object one can use the dot-notation:

   ```js
   objectName.propertyName;
   ```

   Both object name and property are case sensitive. For example,
   let's create an object named `myDog` and give it properties like `breed`, `name`, `age`.

   ```js
   const myDog = {
     name: "Shiro",
     age: 8,
     breed: "Labrador Retriever",
   };
   ```

   Any unassigned property of an object is `undefined`.

   To iterate over an object, you can use the `for...in`.

   ```js
   function showProperties(obj, objName) {
     let result = "";
     for (const x in obj) {
       if (obj.hasOwnProperty(x)) {
         result += `${objName}.${x} = ${obj[x]}\n`;
       }
     }

     console.log(result);
   }
   ```

   You can alternatively use a constructor to create an object.

   ```js
   function Car(make, model, year) {
     this.make = make;
     this.model = model;
     this.year = year;
   }
   ```

   Objects can also be created using the `Object.create()` method:

   ```js
   const Animal = {
     type: "Invertebrates",
     displayType: function () {
       console.log(this.type);
     },
   };

   const animal1 = Object.create(Animal);
   animal1.displayType();
   ```

2. ### Read the code :

   ```js
   // This is an object based vector template
   var vector = {
     _x: 0,
     _y: 0,
     create: function (x, y) {
       var obj = Object.create(this);
       obj.setX(x);
       obj.setY(y);
       return obj;
     },
   };
   ```

   ### Can you make a "class" based alternative to it. Using JS OOP features

   Class based:

   ```js
   class Vector {
     constructor(x, y) {
       this.x = x;
       this.y = y;
     }

     set setX(val) {
       this.x = val;
     }

     set setY(val) {
       this.y = val;
     }

     get getX() {
       return this.x;
     }

     get getY() {
       return this.y;
     }
   }

   let vector1 = new Vector(3, 4);
   console.log(vector1); // Vector { x: 3, y: 4 }
   vector1.setY = 10;
   console.log(vector1.getY); // 10
   let vector2 = new Vector(); // Vector { x: undefined, y: undefined }
   console.log(vector2);
   ```

3. ### Do you think JavaScript is a language of the future?

   Yes, JavaScript can be considered as a language of the future as it is the most commonly used languages in the world. The following features make JavaScript a language for the future:

   - Empowers 95% of the World Wide Web.
   - Excellent Choice of Frameworks.
   - Superfast.
   - Readily Available Packages.

<hr>

## Programs:

1. ### Write code implementations for the following array methods:

   a. forEach:

   ```js
   const arr = [1, 3, 5, true, 12, 13];

   arr.forEach((element) => {
     console.log(element);
   });
   ```

   b. map:

   ```js
   const arrToMap = [1, 2, 4, 8];
   const mappingFunc = (x) => Math.pow(x, 3);

   console.log(arrToMap.map(mappingFunc)); // [ 1, 4, 64, 512 ]
   ```

   c. filter:

   ```js
   const userAges = [12, 23, 22, 18, 19, 61];
   const isEligible = (age) => age >= 18;

   const result = userAges.filter(isEligible);
   console.log(result); // [ 23, 22, 18, 19, 61 ]
   ```

   d. reduce:

   ```js
   const nums = [15.5, 2.3, 1.1, 4.7];

   const getSum = (total, num) => {
     return total + Math.round(num);
   };
   console.log(nums.reduce(getSum, 0)); // 24
   ```

   e. includes:

   ```js
   const pets = ["Dogs", "Cats", "Horses"];
   console.log(pets.includes("Fishes")); // false
   console.log(pets.includes("Cats")); // true
   ```

   f. some:

   ```js
   const ages = [12, 23, 22, 18, 19, 61];
   const checkAges = (age) => age >= 18;

   console.log(ages.some(checkAges));
   ```

   g. every:

   ```js
   const ages = [12, 23, 22, 18, 19, 61];
   const checkAges = (age) => age >= 10;

   console.log(ages.every(checkAges));
   ```

2. ### Simple array implementation.

   ```js
   const arr = new Array(12, 15, 18);
   console.log(arr);

   // This also works.
   const arr2 = [];
   arr2.push(10);
   arr2.push(20);
   console.log(arr2);
   ```

3. ### Todo List Task:

   ```js
   let todo = [];
   let completed = [];

   const add = (title) => {
     if (title === "") return -1;
     const id = Math.floor(Math.random() * 100);
     const newTask = {
       id,
       task: title,
     };
     todo.push(newTask);
     return id;
   };

   const remove = (id) => {
     let result = false;
     todo.forEach((obj) => {
       if (obj.id === id) {
         result = true;
         const deletionIndex = todo.findIndex(obj);
         todo.splice(deletionIndex, 1);
       }
     });
     return result;
   };

   const update = (id, title) => {
     let result = false;
     todo.forEach((obj) => {
       if (obj.id === id) {
         result = true;
         obj.task = title;
       }
     });
     return result;
   };

   const markAsCompleted = (id) => {
     let result = false;
     todo.forEach((obj) => {
       if (obj.id === id) {
         result = true;
         completed.push(obj);
         const index = todo.findIndex(obj);
         todo.splice(index, 1);
       }
     });
     return result;
   };
   ```
