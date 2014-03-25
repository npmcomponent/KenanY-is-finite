var isFinite = require('../');
var test = require('tape');

test('returns `true` for finite values', function(t) {
  t.plan(5);

  t.ok(isFinite(0));
  t.ok(isFinite(1));
  t.ok(isFinite(3.14));
  t.ok(isFinite(-1));
  t.ok(isFinite(new Number(0)));
});

test('returns `false` for non-finite values', function(t) {
  t.plan(3);

  t.ok(!isFinite(NaN));
  t.ok(!isFinite(Infinity));
  t.ok(!isFinite(-Infinity));
});

test('returns `false` for non-numeric values', function(t) {
  t.plan(8);

  t.ok(!isFinite(null));
  t.ok(!isFinite(undefined));
  t.ok(!isFinite([]));
  t.ok(!isFinite(true));
  t.ok(!isFinite(new Date));
  t.ok(!isFinite(''));
  t.ok(!isFinite(' '));
  t.ok(!isFinite('2px'));
});

test('returns `true` for numeric string values', function(t) {
  t.plan(3);

  t.ok(isFinite('2'));
  t.ok(isFinite('0'));
  t.ok(isFinite('08'));
});