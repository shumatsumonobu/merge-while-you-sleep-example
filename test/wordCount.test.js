import assert from "node:assert/strict";
import { test } from "node:test";
import { wordCount } from "../src/strings.js";

test("wordCount: src/strings.js から named export で読み込める関数 (完了条件1)", () => {
  assert.equal(typeof wordCount, "function");
});

test('wordCount: wordCount("hello world") は 2 (完了条件2)', () => {
  assert.equal(wordCount("hello world"), 2);
});

test('wordCount: wordCount("hello") は 1 (完了条件3)', () => {
  assert.equal(wordCount("hello"), 1);
});

test('wordCount: wordCount("") は 0 (完了条件4)', () => {
  assert.equal(wordCount(""), 0);
});

test('wordCount: wordCount("   ") は 0 で半角スペースだけ (完了条件5)', () => {
  assert.equal(wordCount("   "), 0);
});

test('wordCount: wordCount("  hello   world  ") は 2 で前後と続く空白を数えない (完了条件6)', () => {
  assert.equal(wordCount("  hello   world  "), 2);
});

test('wordCount: wordCount("a\\tb\\nc") は 3 でタブと改行も区切り (完了条件7)', () => {
  assert.equal(wordCount("a\tb\nc"), 3);
});

test('wordCount: wordCount("Hello, world!") は 2 で句読点は区切りにしない (完了条件8)', () => {
  assert.equal(wordCount("Hello, world!"), 2);
});

test('wordCount: wordCount("don\'t stop") は 2 でアポストロフィで分けない (完了条件9)', () => {
  assert.equal(wordCount("don't stop"), 2);
});

test('wordCount: wordCount("hello - world") は 3 で記号だけのまとまりも1単語 (完了条件10)', () => {
  assert.equal(wordCount("hello - world"), 3);
});

test('wordCount: wordCount("今日は晴れ") は 1 で空白の無い日本語は1単語 (完了条件11)', () => {
  assert.equal(wordCount("今日は晴れ"), 1);
});

test('wordCount: wordCount("hello\\u3000world") は 2 で全角スペースも区切り (完了条件12)', () => {
  assert.equal(wordCount("hello　world"), 2);
});

test('wordCount: wordCount("\\u3000\\u3000") は 0 で全角スペースだけ (完了条件13)', () => {
  assert.equal(wordCount("　　"), 0);
});

test('wordCount: wordCount("今日は\\u3000晴れ") は 2 で全角スペースで区切られた日本語 (完了条件14)', () => {
  assert.equal(wordCount("今日は　晴れ"), 2);
});
