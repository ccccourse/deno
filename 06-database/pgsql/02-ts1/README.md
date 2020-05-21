# pgsql1.ts

```
user@DESKTOP-96FRN6B MINGW64 /d/ccc/course/deno/06-database/pgsql (master)
$ deno run pgsql1.ts
Compile file:///D:/ccc/course/deno/06-database/pgsql/pgsql1.ts
Download https://deno.land/x/postgres/mod.ts
Download https://deno.land/x/postgres/client.ts
Download https://deno.land/x/postgres/error.ts 
Download https://deno.land/x/postgres/pool.ts  
Download https://deno.land/x/postgres/connection.ts       
Download https://deno.land/x/postgres/connection_params.ts
Download https://deno.land/x/postgres/query.ts
Download https://deno.land/x/postgres/deps.ts
Download https://deno.land/x/postgres/packet_writer.ts
Download https://deno.land/x/postgres/utils.ts        
Download https://deno.land/x/postgres/packet_reader.ts
Download https://deno.land/std@0.51.0/io/bufio.ts
Download https://deno.land/std@0.51.0/io/util.ts 
Download https://deno.land/x/checksum@1.2.0/mod.ts
Download https://deno.land/std@0.51.0/testing/asserts.ts
Download https://deno.land/std@0.51.0/path/mod.ts     
Download https://deno.land/std@0.51.0/encoding/utf8.ts
Download https://deno.land/std@0.51.0/path/win32.ts
Download https://deno.land/std@0.51.0/path/posix.ts
Download https://deno.land/std@0.51.0/path/common.ts
Download https://deno.land/std@0.51.0/path/separator.ts
Download https://deno.land/std@0.51.0/path/interface.ts
Download https://deno.land/std@0.51.0/path/glob.ts
Download https://deno.land/std@0.51.0/path/_constants.ts
Download https://deno.land/std@0.51.0/path/_util.ts
Download https://deno.land/std@0.51.0/fmt/colors.ts
Download https://deno.land/std@0.51.0/testing/diff.ts
Download https://deno.land/std@0.51.0/path/_globrex.ts
Download https://deno.land/x/checksum@1.2.0/hash.ts
Download https://deno.land/x/checksum@1.2.0/sha1.ts
Download https://deno.land/x/checksum@1.2.0/md5.ts
Download https://deno.land/x/postgres/encode.ts
Download https://deno.land/x/postgres/decode.ts
Download https://deno.land/x/postgres/oid.ts
Download https://deno.land/x/postgres/deferred.ts
error: Uncaught PermissionDenied: network access to "localhost:5432", run again with the --allow-net flag
    at unwrapResponse ($deno$/ops/dispatch_json.ts:43:11)
    at Object.sendAsync ($deno$/ops/dispatch_json.ts:98:10)
    at async Object.connect ($deno$/net.ts:180:11)
    at async Connection.startup (https://deno.land/x/postgres/connection.ts:138:17)
    at async Client.connect (https://deno.land/x/postgres/client.ts:14:5)
    at async main (file:///D:/ccc/course/deno/06-database/pgsql/pgsql1.ts:10:3)

user@DESKTOP-96FRN6B MINGW64 /d/ccc/course/deno/06-database/pgsql (master)
$ deno run --allow-net pgsql1.ts
[
 [ "San Francisco", 46, 50, 0.25, 1994-11-26T16:00:00.000Z ],
 [ "San Francisco", 41, 55, 0, 1994-11-28T16:00:00.000Z ]
]

```