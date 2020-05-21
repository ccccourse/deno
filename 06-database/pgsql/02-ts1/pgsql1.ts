import { Client } from "https://deno.land/x/postgres/mod.ts";

async function main() {
  const client = new Client({
    user: "postgres",
    database: "mydb",
    hostname: "localhost",
    port: 5432
  });
  await client.connect();
  const result = await client.query("SELECT * FROM weather;");
  console.log(result.rows);
  await client.end();
}


main();
