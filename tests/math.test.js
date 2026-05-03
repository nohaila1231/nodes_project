import { test } from 'node:test';
import assert from 'node:assert';
import { add, multiply } from '../src/index.js';

test('add function', async (t) => {
  await t.test('adds two positive numbers', () => {
    assert.strictEqual(add(2, 3), 5);
  });

  await t.test('adds negative numbers', () => {
    assert.strictEqual(add(-2, 3), 1);
  });

  await t.test('adds zero', () => {
    assert.strictEqual(add(5, 0), 5);
  });
});

test('multiply function', async (t) => {
  await t.test('multiplies two numbers', () => {
    assert.strictEqual(multiply(4, 5), 20);
  });

  await t.test('multiplies by zero', () => {
    assert.strictEqual(multiply(5, 0), 0);
  });

  await t.test('multiplies negative numbers', () => {
    assert.strictEqual(multiply(-3, 4), -12);
  });
});
