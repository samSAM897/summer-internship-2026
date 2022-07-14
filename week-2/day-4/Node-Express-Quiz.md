# Assignment Week 2 Day 4

## Theory:

1. ### What is Node JS?

   Node.js is a free and Open Source Javascript Runtime Environment. It can run
   on multiple OS and is used for server-side scripting using javascript.
   Node.js is asynchronous and event-driven. It is used to build scalable network applications.

   The following code snippet runs a sample Hello world web server:

   ```js
   const http = require("http");
   const hostname = "127.0.0.1";
   const port = 3000;

   const server = http.createServer((req, res) => {
     res.statusCode = 200;
     res.setHeader("Content-Type", "text/plain");
     res.end("Hello World");
   });

   server.listen(port, hostname, () => {
     console.log(`Server running at http://${hostname}:${port}/`);
   });
   ```

2. ### What is V8 Engine?

   V8 is Google's open-source high performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others. It implements ECMAScript and WebAssembly and runs on Windows 7 or later, macOS 10.12+ and Linux systems that use x64, ARM or MIPS processors. V8 can run standalone and can also be embedded into other C++ applications.

3. ### What is event loop in Node.js?

   As Node.js is a single-threaded event-driven platform/environment that is capable of running non-blocking, asynchronous programming.
   This makes Node.js more memory efficient. The **event loop** allows Node.js to perform non-blocking I/O operations despite the fact that JS is single-threaded.

   Features of Event loop:

   - The Event Loop is an endless loop, which waits for tasks, executes them and sleeps until it recieves more tasks.

   - The event loop executes executes tasks from the event queue only when the called stack is empty i.e. there is no ongoing task.

   - The event loop allows us to use callbacks and promises.

   - The event loop executes the tasks starting from the oldest first.

   Example:

   ```js
   console.log("Statement 1"); // This is printed first.

   setTimeout(function () {
     // Due to timeout will get printed after
     console.log("Statement 2"); // timer runs out.
   }, 1000);

   console.log("Statement 3"); // Printed after first statement.
   ```

4. ### What is the use of tsconfig.json file?

   The tsconfig.json file helps in creating and defining custom configurations for a specific project or for all working directories in typescript.
   Using it, you can specify the location to save your compiled typescript code.

5. ### What are the modules provided by the `fs` module?

   The fs module allows user to interact with the file system.

   To use the promise-based API's:

   ```js
   import * as fs from "node:fs/promises";
   ```

<!-- TODO: Solve it further. -->
