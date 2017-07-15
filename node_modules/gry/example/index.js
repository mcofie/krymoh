// Dependencies
var Repo = require("../lib")
  , Fs = require("fs")
  , OneByOne = require("one-by-one")
  ;

// Create the repository
var myRepo = new Repo("./foo");
OneByOne([
    myRepo.create.bind(myRepo)
  , function (cb) {
        console.log("> Created the repository.");
        Fs.writeFile("./foo/README", "Hello World!", cb);
    }
  , function (cb) {
        console.log("> Created README.md");
        myRepo.exec("add .", cb);
    }
  , function (cb) {
        console.log("> Added the files.");
        myRepo.commit("Initial commit.", cb);
    }
  , function (cb) {
        console.log("> Created the initial commit.");
        cb();
    }
], function (err) {
    console.log(err ? "An error appeared: " + err.stack : "Successfully done.");
});
