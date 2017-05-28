const StylusParser = require("stylus/lib/parser");

const ast = new StylusParser(".class {\n  color red\n}\n").parse();

console.log(ast);
