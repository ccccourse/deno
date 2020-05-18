import { Application } from "https://deno.land/x/abc/mod.ts";
const app = new Application();
app.static("/", "./public")
app.start({ port: 8080 });
  