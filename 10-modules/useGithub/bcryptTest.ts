import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
const salt = bcrypt.gensalt(8);
const hash = bcrypt.hashpw("test", salt);