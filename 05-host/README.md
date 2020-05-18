# Deno Host 

## Forever / PM2

* https://aralroca.com/blog/from-node-to-deno

Forever and PM2 are CLI tools for ensuring that a given script runs continuously as a daemon. Unlike Forever, PM2 is more complete and also serves as load balancer. Both are very useful in Node, but can we use them in Deno?

Forever is intended for Node only, so using it is not feasible. On the other hand, with PM2 we can run non-node scripts, so we could still use it for Deno.

PM2 logo
Creating an app.sh file

```
#!/bin/bash
deno run -A myCode.ts
```

And

```
➜ pm2 start ./app.sh 
```
