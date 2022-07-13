# Quiz 1 Week 2 Day 3

## Theory:

1. ### What are the basic data types in TypeScript?

   Some of the basic dataypes in TypeScript are:

   - **Boolean**: These work the same way as they do in JavaScript. Variables of data type boolean are declared like:

     ```ts
     const myBool: boolean = false;
     ```

   - **String**: Same as strings in JavaScript.

     ```ts
     let myStr: string = "Hamburger";
     ```

   - **Number**: They are also the same as numbers in JS.
     ```ts
     const minAgeToVote: number = 18;
     ```
   - **Array**: Arrays in TS are just like arrays in js.
     ```ts
     const myArr: number[] = [12, 90, 71];
     ```
     The above example is suitable for cases when the entire array will only store numbers.
     You can also declare an array in the below method:
     ```ts
     const myArr: Array<number> = [12, 90, 71];
     ```
     To create an array that can store all the datatypes:
     ```ts
     const myArr: Array<any> = [12, "true", false];
     ```
   - **Tuples**: Tuples are a data type unique to TypeScript. You can consider them as arrays with fixed elements. This is a great alternative when you know how many variables do you want in your array.

     ```ts
     let mine: [number, string];
     mine[0] = 14; // This is accepted.

     mine[0] = "Hello"; // This will throw an error.

     mine = [121, "Dave", "Ardito"]; // This also throws an error.

     mine = [12, "Diablo"]; // This works.
     ```

2. ### What is Generic data type ?

   Generics in TypeScript is a tool which enables us to create reusable components. It creates a component that can work with a variety of data types rather than a single data type.
   An example of a generic is:

   ```ts
   function showVal<T>(arg: T) {
     return arg;
   }

   console.log(showVal<number>(121)); // prints 121.
   ```

   The use of Generics has 3 main advantages:

   1. **Type-safety**: It will allow a variable to store only type of value.
   2. Typecasting is not required.
   3. Compile-Time Checking.

3. ### What is type inferring in TS?

   In many sitauations, type inference is used to provide type information when no explicit type annotation is provided. It is useful when there are no explicit type annotation available.

   For example:

   ```ts
   function sum(x: number, y: number) {
     return x + y;
   }

   let add: number = sum(10, 20); // Compiled.
   let subtract: string = sum(10, 20); // Compilation error.
   ```

4. ### What are the possible ways to define typing for functions?

   There are multiple ways to define types for functions:

   1. **Method Signatures**:

      The method signature syntax is the most straight forward to use. When defining an object type, its methods can easily be described by providing signatures as follows:

      ```ts
      interface Date {
        toString(): string;
        setTime(time: number): number;
      }
      ```

   2. **Function Type Literals**:

      This type of function typing is typically used in the signature of a higher-order function i.e. a function which accepts functions as parameters or returns a function.

      ```ts
      interface Array<T> {
        sort(compareFn?: (a: T, b: T) => number): this;
      }
      ```

   3. **Object Type Literals With Call or Construct Signatures**:

      This is same as the fact that functions in JS are just special objects that can be called again and again.

      ```ts
      interface RegExpConstructor {
        (pattern: RegExp): RegExp;
        (pattern: string, flags?: string): RegExp;
      }
      ```

5. ### How to define generic types for classes?

   To do this we can use the generic type parameter in '`< >`' brackets.

   For example:

   ```ts
   class StudentInfo<T, U> {
     private Id: T;
     private Name: U;

     setValue(id: T, mame: U): void {
       this.Id = id;
       this.Name = name;
     }

     display(): void {
       console.log(`Id = ${this.Id}, Name = ${this.Name}`);
     }
   }

   let student1 = new StudentInfo<number, string>();
   student1.setValue(101, "Hardik");
   student1.display();
   ```

<hr>

## Program:

1. ### Define the types in typescript for the given following JavaScript code.

   Todo:

   - Define type/interface for a single Todo object.
   - Define type for each function.
   - Do not use `any` (TS Data Type) type of typescript.

   Code(Js):

   ```js
   var todos = [];
   function add(name, description) {
     return todos.push({ name: name, description: description, done: false });
   }
   function remove(index) {
     return todos.splice(index, 1);
   }
   function list() {
     todos.forEach(function (todo, index) {
       console.log(index + " -" + todo.name);
     });
   }
   function update(index, name, description) {
     todos[index].name = name;
     todos[index].description = description;
     return todos[index];
   }
   ```

   Solution:

   ```ts
   class Entry {
     name: string;
     description: string;
     done: boolean;
   }

   var todos: Entry[] = [];

   function add(name: string, description: string): number {
     return todos.push({
       name: name,
       description: description,
       done: false,
     });
   }

   function remove(index: number): Entry[] {
     return todos.splice(index, 1);
   }

   function list(): void {
     todos.forEach(function (todo: Entry, index: number) {
       console.log(index + " - " + todo.name);
     });
   }

   function update(index: number, name: string, description: string): Entry {
     todos[index].name = name;
     todos[index].description = description;
     return todos[index];
   }

   console.log(add("Make a PR", "Do some work")); // 1
   list(); // 0 - Make a PR
   ```
