# flush-promises

[![Build Status](https://travis-ci.org/kentor/flush-promises.svg)](https://travis-ci.org/kentor/flush-promises) [![npm](https://img.shields.io/npm/v/flush-promises.svg)](https://www.npmjs.com/package/flush-promises)

Flush all pending resolved promise handlers. Useful in tests.

## example with async/await

```js
const flushPromises = require('flush-promises');

test('flushPromises', async () => {
  let a;
  let b;

  Promise.resolve().then(() => {
    a = 1;
  }).then(() => {
    b = 2;
  })

  await flushPromises();

  expect(a).toBe(1);
  expect(b).toBe(2);
});
```

## TypeScript

```ts
import * as flushPromises from "flush-promises";

test("flushPromises", async () => {
  let a;
  let b;
 
  Promise.resolve().then(() => {
    a = 1;
  }).then(() => {
    b = 2;
  });
 
  await flushPromises();
 
  expect(a).toBe(1);
  expect(b).toBe(2);
});
```
