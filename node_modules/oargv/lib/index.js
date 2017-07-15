// Dependencies
var Ul = require("ul");

/**
 * OArgv
 * Stringifies the options, building a command.
 *
 * @name OArgv
 * @function
 * @param {Object} options The options that should be stringified. If it contains
 * the `_` field, then this should be an `Array` of strings, that representing values
 * that will be added at the end of the command. The `__` field is the separator (default: `" "`).
 * @param {String} prgm The program that executes the command (default: `""`).
 * @return {String} The stringified arguments.
 */
var OArgv = module.exports = function (options, prgm) {

    // Variables
    var sOpts = ""
      , c = null
      , escape = JSON.stringify
      ;

    // Defaults
    prgm = prgm || "";
    options = Ul.merge(options, {
        _: []
      , __: OArgv.separator
    });

    if (typeof options._ === "string") {
        options._ = [options._];
    }

    // Options
    Object.keys(options).forEach(function (k) {
        if (k === "_" || k === "__") { return; }
        c = options[k];

        if (k.length === 1) {
            sOpts += " -" + k;
        } else {
            sOpts += " --" + k;
        }

        if (typeof c === "string") {
            sOpts += options.__ + escape(c);
        }
    });

    // Build everything
    return (prgm + sOpts + options._.map(function (c) {
        return " " + escape(c);
    }).join("")).trim();
};

// Defaults
OArgv.separator = " ";
