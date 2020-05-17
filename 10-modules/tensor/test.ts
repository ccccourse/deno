// import { assert } from "https://deno.land/std/testing/asserts.ts";
import { expect } from "https://deno.land/x/expect/mod.ts";
import * as T from "./mod.ts";

Deno.test('add', () => {
  let a = [1,2,3], b = [1,1,1];
  expect(T.add(a,b)).toEqual([2,3,4]);
})
