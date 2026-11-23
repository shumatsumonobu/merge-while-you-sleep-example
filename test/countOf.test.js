import assert from "node:assert/strict";
import { test } from "node:test";
import { countOf } from "../src/strings.js";

test("countOf: src/strings.js から named export で読み込める関数 (完了条件1)", () => {
  assert.equal(typeof countOf, "function");
});

test('countOf: countOf("abcabc", "abc") は 2 (完了条件2)', () => {
  assert.equal(countOf("abcabc", "abc"), 2);
});

test('countOf: countOf("aaaa", "aa") は 2 で重なりは数えない (完了条件3)', () => {
  assert.equal(countOf("aaaa", "aa"), 2);
});

test('countOf: countOf("aaa", "aa") は 1 (完了条件4)', () => {
  assert.equal(countOf("aaa", "aa"), 1);
});

test('countOf: countOf("hello", "xyz") は 0 で一致が無い (完了条件5)', () => {
  assert.equal(countOf("hello", "xyz"), 0);
});

test('countOf: countOf("", "a") は 0 で s が空文字 (完了条件6)', () => {
  assert.equal(countOf("", "a"), 0);
});

test('countOf: countOf("ab", "abc") は 0 で sub が s より長い (完了条件7)', () => {
  assert.equal(countOf("ab", "abc"), 0);
});

test('countOf: countOf("Abc abc", "abc") は 1 で大文字と小文字を区別する (完了条件8)', () => {
  assert.equal(countOf("Abc abc", "abc"), 1);
});

test('countOf: countOf("a.b.c", ".") は 2 で sub をそのままの文字列として扱う (完了条件9)', () => {
  assert.equal(countOf("a.b.c", "."), 2);
});

test('countOf: countOf("abc", "") は RangeError (完了条件10)', () => {
  assert.throws(() => countOf("abc", ""), RangeError);
});

test('countOf: countOf("", "") は RangeError (完了条件11)', () => {
  assert.throws(() => countOf("", ""), RangeError);
});
