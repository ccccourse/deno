import * as bcrypt from "https://github.com/JamesBroadberry/deno-bcrypt/blob/master/mod.ts";
const salt = bcrypt.gensalt(8);
const hash = bcrypt.hashpw("test", salt);