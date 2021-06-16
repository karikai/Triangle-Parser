const fs = require("fs");
const service = require("./services");

// Reads File
const triangleFile = fs.readFileSync("./triangle.txt").toString();
// Parses Each Line
const triangle = service.cleanRow(triangleFile.split(/\n/));

const sum = service.generateSum(triangle);

console.log(sum)