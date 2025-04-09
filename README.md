
What is Recursion?
==================

Recursion is a programming technique where a function calls itself in order to solve a problem.

How it works
------------

A recursive function typically has two parts:

*   **Base case** – when to stop recursing.
*   **Recursive case** – the part where the function calls itself.

Example: Factorial
------------------

Here's a simple example of recursion in JavaScript: calculating the factorial of a number.

    const factorial = functionl(n) {
      if (n === 0) {
        return 1; // base case
      } else {
        return n * factorial(n - 1); // recursive case
      }
    }

`factorial(5)` would return `5 * 4 * 3 * 2 * 1 = 120`.

Why use recursion?
------------------

Recursion is especially useful for problems that can be broken down into similar subproblems