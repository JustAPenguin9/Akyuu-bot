const dotenv = require("dotenv");
// import * as dotenv from "dotenv"
dotenv.config();

module.exports = {
  token: process.env.TOKEN,
};

/*
export default {
  token: process.env.TOKEN,
};
export const token = process.env.TOKEN
*/