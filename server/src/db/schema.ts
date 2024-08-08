import path from "path";
import fs from "fs";
import { pool } from "./pool";

const schema = fs.readFileSync(path.resolve(__dirname, "./schema.sql"), {
  encoding: "utf8",
});

export function resetDatabase(schema) {
  pool.query(schema, (err, res) => {
    if (err) {
      console.error(err, res);
      return;
    } else {
      console.log("Reset database");
    }
    pool.end();
  });
}

resetDatabase(schema);
