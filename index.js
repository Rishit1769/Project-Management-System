import dotenv from "dotenv"

dotenv.config({
    path: "./.env",
});

let myUserName = process.env.username
console.log(myUserName)

console.log("Start of backend project")