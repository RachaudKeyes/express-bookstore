/** Common config for bookstore. */
require("dotenv").config({ path: "./.env" });

let DB_URI = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@127.0.0.1:5432`;

if (process.env.NODE_ENV === "test") {
  DB_URI = `${DB_URI}/books-test`;
} else {
  DB_URI = `${DB_URI}/books`;
}


module.exports = { DB_URI };