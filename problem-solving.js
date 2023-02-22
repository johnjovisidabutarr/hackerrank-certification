"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'longestSubarray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function longestSubarray(arr) {
  // Write your code here
  let i = 0;
  let j = 0;
  let maxLen = 0;
  while (j < arr.length) {
    if (Math.abs(Math.max(...arr.slice(i, j + 1)) - Math.min(...arr.slice(i, j + 1))) <= 1) {
      maxLen = Math.max(maxLen, j - i + 1);
      j++;
    } else {
      i++;
    }
  }
  return maxLen;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arrCount = parseInt(readLine().trim(), 10);

  let arr = [];

  for (let i = 0; i < arrCount; i++) {
    const arrItem = parseInt(readLine().trim(), 10);
    arr.push(arrItem);
  }

  const result = longestSubarray(arr);

  ws.write(result + "\n");

  ws.end();
}
