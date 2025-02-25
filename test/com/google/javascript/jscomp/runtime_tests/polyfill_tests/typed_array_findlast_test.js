/*
 * Copyright 2023 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

goog.module('jscomp.runtime_tests.polyfill_tests.typedarray_findlast_test');
goog.setTestOnly();

const testSuite = goog.require('goog.testing.testSuite');

testSuite({
  testFindLast_int8() {
    assertEquals(new Int8Array([1, 2, 3, 4]).findLast(x => x % 2 === 0), 4);
  },

  testFindLast_uint8() {
    assertEquals(new Uint8Array([1, 2, 3, 4]).findLast(x => x % 2 === 0), 4);
  },

  testFindLast_uint8Clamped() {
    assertEquals(
        new Uint8ClampedArray([1, 2, 3, 4]).findLast(x => x % 2 === 0), 4);
  },

  testFindLast_int16() {
    assertEquals(new Int16Array([1, 2, 3, 4]).findLast(x => x % 2 === 0), 4);
  },

  testFindLast_uint16() {
    assertEquals(new Uint16Array([1, 2, 3, 4]).findLast(x => x % 2 === 0), 4);
  },

  testFindLast_int32() {
    assertEquals(new Int32Array([1, 2, 3, 4]).findLast(x => x % 2 === 0), 4);
  },

  testFindLast_uint32() {
    assertEquals(new Uint32Array([1, 2, 3, 4]).findLast(x => x % 2 === 0), 4);
  },

  testFindLast_float32() {
    assertEquals(new Float32Array([1, 2, 3, 4]).findLast(x => x % 2 === 0), 4);
  },

  testFindLast_float64() {
    assertEquals(new Float64Array([1, 2, 3, 4]).findLast(x => x % 2 === 0), 4);
  },
});
