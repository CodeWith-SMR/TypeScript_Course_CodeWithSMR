"use strict";
/*
https://www.w3schools.com/typescript/typescript_getstarted.php


install node js from nodejs.org



install typescript in your working directory with following command
npm install typescript --save-dev



create .gitignore and add node_modules



run following command to check tsc
npx tsc



run following command to create tsconfig.json
npx tsc --init



run following command to transpile
npx tsc



run following command to transpile and watch
npx tsc --watch


*/















let user = "haider";
user = "abdullah";
let num = 5;
num = 7;
let isOff = true;
isOff = false;
function greet(userName) {
    console.log(`Welcome ${userName}`);
}
greet(user);
function makeGreeting(userName, msg) {
    return `${msg} ${userName}`;
}
let greetMsg = makeGreeting("haider", "How are you");
console.log(greetMsg);
