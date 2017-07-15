// Dependencies
var Deffy = require("deffy");

/**
 * OneByOne
 * Calls functions one by one and memorizes the results.
 *
 * @name OneByOne
 * @function
 * @param {Array} arr An array of functions getting the callback parameter in
 * the first argument and response arguments from the previous function call.
 * @param {Function} cb The callback function called with an error (or `null`)
 * and the results array.
 * @return {OneByOne} The `OneByOne` function.
 */
function OneByOne(arr, cb) {

    var self = this
      , result = [null]
      , cFunc = null
      , length = arr.length
      , lastRes = []
      ;

    function done() {
        // result: [null|Error, [data1, data2]]
        cb.apply(self, result);
    }


    function doSeq(i) {
        cFunc = arr[i];

        // We are done
        if (typeof cFunc !== "function") {
            return done();
        }

        // Call the current function
        cFunc.apply(self, [function () {

            var args = [].slice.call(arguments)
              , cRes = null
              , ii = 1
              ;

            // Prepare the result data
            for (; ii < args.length; ++ii) {
                cRes = result[ii] = Deffy(result[ii], []);
                cRes[i] = args[ii];
            }

            // We found an error
            if (args[0]) {
                result[0] = args[0];
                return done();
            }

            lastRes = args.slice(1);

            doSeq(++i);
        }].concat(lastRes));
    }

    doSeq(0);
}

module.exports = OneByOne;
