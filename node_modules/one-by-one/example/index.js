// Dependencies
var OneByOne = require("../lib");

// Call these functions one by one
OneByOne([
    function (cb) {
        setTimeout(function () {
            cb(null, "Hello World");
        }, 1000);
    }
  , function (cb, data) {
        console.log(data);
        // => "Hello World"
        setTimeout(function () {
            cb(new Error("Some error"));
        }, 100);
    }
  , function (cb) {
        // This will NOT be triggered because the
        // previous sent an error
        cb(null, null);
    }
], function (err, data) {
    console.log(err, data);
});
