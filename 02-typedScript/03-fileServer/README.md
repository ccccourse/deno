# File Server

```
$ deno install --allow-net --allow-read https://deno.land/std/http/file_server.ts
```

記得將 C:\Users\user\.deno\bin 設到系統路徑：

然後啟動

```
PS D:\ccc\course\deno\02-typedScript\03-fileServer> file_server .
HTTP server listening on http://0.0.0.0:4507/
[2020-05-16 07:06:31] "GET / HTTP/1.1" 200
系統找不到指定的檔案。 (os error 2)
[2020-05-16 07:06:31] "GET /favicon.ico HTTP/1.1" 404
[2020-05-16 07:06:33] "GET /README.md HTTP/1.1" 200
```

接著看

http://127.0.0.1:4507/
