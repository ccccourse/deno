# test


## success Test

```
PS D:\ccc\course\deno\02-typedScript\06-test> deno test test1.ts
Compile file:///D:/ccc/course/deno/02-typedScript/06-test/test1.ts
running 1 tests
test hello world ... ok (40ms)

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (145ms)
```

## Fail Test

```
PS D:\ccc\course\deno\02-typedScript\06-test> deno test test2.ts
Compile file:///D:/ccc/course/deno/02-typedScript/06-test/.deno.test.ts
running 1 tests
test hello world ... FAILED (6ms)

failures:

hello world
AssertionError: Values are not equal:


    [Diff] Actual / Expected


-   3
+   4

    at assertEquals (https://deno.land/std/testing/asserts.ts:167:9)
    at file:///D:/ccc/course/deno/02-typedScript/06-test/test2.ts:5:3
    at asyncOpSanitizer ($deno$/testing.ts:36:11)
    at Object.resourceSanitizer [as fn] ($deno$/testing.ts:70:11)
    at TestApi.[Symbol.asyncIterator] ($deno$/testing.ts:264:22)
    at TestApi.next (<anonymous>)
    at Object.runTests ($deno$/testing.ts:346:20)

failures:

        hello world

test result: FAILED. 0 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out (166ms)
```