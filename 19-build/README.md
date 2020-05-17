# Build Deno

* https://deno.land/manual/contributing/building_from_source

## 系統架構 Architecture

* https://deno.land/manual/contributing/architecture

![](https://deno.land/images/schematic_v0.2.png)

## 源碼結構

* https://github.com/denoland/deno
    * core -- 核心
    * std -- 標準函式庫
    * cli -- 面對使用者的部分
    * docs -- 說明文件
    * tools -- 工具程式 (*.py, ....)

## 結果

失敗：

```
   Compiling swc_ecma_visit_macros v0.1.0
     Running `CARGO_MANIFEST_DIR=/root/.cargo/registry/src/github.com-1ecc6299db9ec823/swc_ecma_visit_macros-0.1.0 CARGO_PKG_VERSION_MAJOR=0 CARGO_PKG_VERSION_PRE= CARGO_PKG_NAME=swc_ecma_visit_macros CARGO_PKG_VERSION=0.1.0 CARGO_PKG_VERSION_PATCH=0 CARGO_PKG_DESCRIPTION='Visitors for swc ecmascript nodes which works on stable rustc' CARGO=/usr/bin/cargo CARGO_PKG_VERSION_MINOR=1 LD_LIBRARY_PATH='/home/ccc/deno_build/target/debug/deps:/usr/lib' CARGO_PKG_HOMEPAGE= CARGO_PKG_REPOSITORY='https://github.com/swc-project/swc.git' CARGO_PKG_AUTHORS='강동윤 <kdy1997.dev@gmail.com>' rustc --edition=2018 --crate-name swc_ecma_visit_macros /root/.cargo/registry/src/github.com-1ecc6299db9ec823/swc_ecma_visit_macros-0.1.0/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi --crate-type proc-macro --emit=dep-info,link -C prefer-dynamic -C debuginfo=2 -C metadata=0d9097d916da9cba -C extra-filename=-0d9097d916da9cba --out-dir /home/ccc/deno_build/target/debug/deps -L dependency=/home/ccc/deno_build/target/debug/deps --extern inflector=/home/ccc/deno_build/target/debug/deps/libinflector-1d45932520f6bc5f.rlib --extern pmutil=/home/ccc/deno_build/target/debug/deps/libpmutil-314865f14902beb5.rlib --extern proc_macro2=/home/ccc/deno_build/target/debug/deps/libproc_macro2-e5f7b54801689275.rlib --extern quote=/home/ccc/deno_build/target/debug/deps/libquote-193f81aee463eb23.rlib --extern swc_macros_common=/home/ccc/deno_build/target/debug/deps/libswc_macros_common-479c061b22177b11.rlib --extern syn=/home/ccc/deno_build/target/debug/deps/libsyn-15a1342abc2f4e9c.rlib --cap-lints warn`
error[E0433]: failed to resolve: use of undeclared type or module `proc_macro`
  --> /root/.cargo/registry/src/github.com-1ecc6299db9ec823/swc_ecma_visit_macros-0.1.0/src/lib.rs:25:20
   |
25 | pub fn define(tts: proc_macro::TokenStream) -> proc_macro::TokenStream {
   |                    ^^^^^^^^^^ use of undeclared type or module `proc_macro`

error[E0433]: failed to resolve: use of undeclared type or module `proc_macro`
  --> /root/.cargo/registry/src/github.com-1ecc6299db9ec823/swc_ecma_visit_macros-0.1.0/src/lib.rs:25:48
   |
25 | pub fn define(tts: proc_macro::TokenStream) -> proc_macro::TokenStream {
   |                                                ^^^^^^^^^^ use of undeclared type or module `proc_macro`

error: aborting due to 2 previous errors

For more information about this error, try `rustc --explain E0433`.
error: could not compile `swc_ecma_visit_macros`.

Caused by:
  process didn't exit successfully: `CARGO_MANIFEST_DIR=/root/.cargo/registry/src/github.com-1ecc6299db9ec823/swc_ecma_visit_macros-0.1.0 CARGO_PKG_VERSION_MAJOR=0 CARGO_PKG_VERSION_PRE= CARGO_PKG_NAME=swc_ecma_visit_macros CARGO_PKG_VERSION=0.1.0 CARGO_PKG_VERSION_PATCH=0 CARGO_PKG_DESCRIPTION='Visitors for swc ecmascript nodes which works on stable rustc' CARGO=/usr/bin/cargo CARGO_PKG_VERSION_MINOR=1 LD_LIBRARY_PATH='/home/ccc/deno_build/target/debug/deps:/usr/lib' CARGO_PKG_HOMEPAGE= CARGO_PKG_REPOSITORY='https://github.com/swc-project/swc.git' CARGO_PKG_AUTHORS='강동윤 <kdy1997.dev@gmail.com>' rustc --edition=2018 --crate-name swc_ecma_visit_macros /root/.cargo/registry/src/github.com-1ecc6299db9ec823/swc_ecma_visit_macros-0.1.0/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi --crate-type proc-macro --emit=dep-info,link -C prefer-dynamic -C debuginfo=2 -C metadata=0d9097d916da9cba -C extra-filename=-0d9097d916da9cba --out-dir /home/ccc/deno_build/target/debug/deps -L dependency=/home/ccc/deno_build/target/debug/deps --extern inflector=/home/ccc/deno_build/target/debug/deps/libinflector-1d45932520f6bc5f.rlib --extern pmutil=/home/ccc/deno_build/target/debug/deps/libpmutil-314865f14902beb5.rlib --extern proc_macro2=/home/ccc/deno_build/target/debug/deps/libproc_macro2-e5f7b54801689275.rlib --extern quote=/home/ccc/deno_build/target/debug/deps/libquote-193f81aee463eb23.rlib --extern swc_macros_common=/home/ccc/deno_build/target/debug/deps/libswc_macros_common-479c061b22177b11.rlib --extern syn=/home/ccc/deno_build/target/debug/deps/libsyn-15a1342abc2f4e9c.rlib --cap-lints warn` (exit code: 1)
root@localhost:/home/ccc/deno_build# ls
Cargo.lock  cli   deno_typescript  LICENSE    Releases.md  target       third_party
Cargo.toml  core  docs             README.md  std          test_plugin  tools
root@localhost:/home/ccc/deno_build# ls
Cargo.lock  cli   deno_typescript  LICENSE    Releases.md  target       third_party
Cargo.toml  core  docs             README.md  std          test_plugin  tools
```