const render = require("./src/page-template");
const fs =require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");

const team = [
    new Manager("Ufuoma", 1 ,"ufuoma@mary.com", 6783280987),
    new Engineer("James" ,2 ,"james@mary.com", "jamesGit"),
    new Engineer("Ann", 3 ,"ann@mary.com", "annGit"),
    new Intern("David", 4 ,"david@mary.com", "GATech"),  
]

fs.writeFileSync(outputPath, render(team), "utf-8")

