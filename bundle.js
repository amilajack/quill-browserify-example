const fs = require("fs");
const browserify = require("browserify");
const babelify = require("babelify");

browserify("./index.js")
  .transform(babelify, {
    presets: [["@babel/preset-env", { modules: "amd" }], "@babel/preset-react"],
  })
  .bundle()
  .pipe(fs.createWriteStream("dist.js"));
