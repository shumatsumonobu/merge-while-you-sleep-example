import assert from "node:assert/strict";
import { test } from "node:test";
import { center } from "../src/strings.js";

test('center: center("ab", 6) は "  ab  " (完了条件1)', () => {
  assert.equal(center("ab", 6), "  ab  ");
});

test('center: center("abc", 6) は " abc  " で右を1つ多くする (完了条件2)', () => {
  assert.equal(center("abc", 6), " abc  ");
});

test('center: center("abcdef", 4) は "abcdef" で縮めない (完了条件3)', () => {
  assert.equal(center("abcdef", 4), "abcdef");
});

test('center: center("", 3) は "   " (完了条件4)', () => {
  assert.equal(center("", 3), "   ");
});

test("center: width が -1 のとき RangeError (完了条件5)", () => {
  assert.throws(() => center("ab", -1), RangeError);
});

test("center: width が 1.5 のとき RangeError (完了条件5)", () => {
  assert.throws(() => center("ab", 1.5), RangeError);
});

test("center: width が NaN のとき RangeError (完了条件5)", () => {
  assert.throws(() => center("ab", NaN), RangeError);
});
