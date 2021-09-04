const render = require("./src/page-template");
const fs =require("fs");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");

const team = [
    { 
    name: "ufuoma",
    id: 1,
    email:"ufuoma@mary.com",
    role: "manager"
},
{ 
    name: "Mary",
    id: 2,
    email:"maryann@mary.com",
    role: "engineer"
},
{ 
    name: "sam",
    id: 3,
    email:"sam@sam.com",
    role: "engineer"
},
{ 
    name: "Eve",
    id: 4,
    email:"eve@mary.com",
    role: "intern"
},
       
]

fs.writeFileSync(outputPath, render(team), "utf-8")

