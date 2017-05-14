'use strict';

const flushPromises = require('.');

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
