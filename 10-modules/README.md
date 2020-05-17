# Modules


## Install

直接 import 就行了！

## Publish

* [re: What is Deno.js and why should you care?](https://dev.to/eatsjobs/comment/oh8c)
    * [How do you publish a package with deno?](https://dev.to/eatsjobs/comment/oh8c)


For Deno, you don't need npm at all. Having it located somewhere on a CDN which the .ts code is supported directly. An example of a rich library would be something like oak.

The biggest "problem" with dual support would be that modules have to end in the extension in Deno. Also Node.js doesn't support TypeScript directly, and doesn't support ESM (without enabling experimental modules). So you would have to have a build a version that would work frictionlessly in Node.js and have that be your distributable to npm. I'm personally not aware of anyone who has created a good build script for Deno .ts to CommonJS .js, but it should/could be possible fairly straight forward. The builder would need to provide a Compiler Host that resolved modules in line with Deno's module resolution and also strip out the .ts extensions on emit.

If you are using Deno namespace APIs, almost the reverse of #2644 will be needed, almost a "browserify" layer that translates Deno APIs to Node.js ones.

想登錄到官網就編這個 json

https://github.com/denoland/deno_website2/blob/master/database.json

## Packages

* https://github.com/denolib/awesome-deno
    * https://github.com/keroxp/deno-ws
    * https://github.com/denolib/marked/