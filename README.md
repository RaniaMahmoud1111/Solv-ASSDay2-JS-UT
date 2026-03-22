# JS Unit Testing Practice

A hands-on exercise covering unit testing in JavaScript using **Mocha/Chai** and **Jasmine**.

---

## Tasks Overview

### Task 1 — API Fetch Testing (Mocha + Chai)
Fetch data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) and write tests using `expect` to validate:
- Response data **length**
- Response data **type**

### Task 2 — MathUtils Unit Tests (Jasmine)
Implement full unit test coverage for a `MathUtils` utility class with these methods:

| Method | Description |
|---|---|
| `sum(a, b)` | Returns `a + b` |
| `subtract(a, b)` | Returns `a - b` |
| `multiply(a, b)` | Returns `a * b` |
| `divide(a, b)` | Returns `a / b` |
| `average(a, b)` | Returns `(a + b) / 2` |
| `factorial(n)` | Returns `n!`, throws on negative input |
| `checkPositivity(n)` | Returns `true` if `n >= 0`, else `false` |

### Task 3 — Async Request Testing
Test two HTTP requests in Node.js using `async/await` instead of the `done()` callback pattern.

---

## Tech Stack

- [Mocha](https://mochajs.org/) — test runner
- [Chai](https://www.chaijs.com/) — assertion library
- [Jasmine](https://jasmine.github.io/) — BDD testing framework

---

## Getting Started

```bash
# Install dependencies
npm install

# Run Mocha tests
npm test

# Run Jasmine tests
npx jasmine
```
