const fs = require("fs");
const execSync = require("child_process").execSync;
const benchmark = require("nodemark");

// ファイルをめちゃくちゃにする
const setup = () => {
    const file = fs.readFileSync("src/sample.js");
    fs.writeFileSync("src/sample.js", file.toString().replace(/\n/g, ""));
    process.stdout.write(".");
};

console.log("prettier");
const result1 = benchmark(() => {
    execSync(`yarn run prettier`);
}, setup);
console.log(result1);
console.log(`average time: ${result1.milliseconds()}ms`);

console.log(`---`);

console.log("pretty-quick");
const result2 = benchmark(() => {
    execSync(`yarn run pretty-quick`);
}, setup);
console.log(result2);
console.log(`average time: ${result2.milliseconds()}ms`);
