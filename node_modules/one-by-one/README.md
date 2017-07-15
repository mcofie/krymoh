# one-by-one [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/one-by-one.svg)](https://www.npmjs.com/package/one-by-one) [![Downloads](https://img.shields.io/npm/dt/one-by-one.svg)](https://www.npmjs.com/package/one-by-one) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Run async tasks one by one.

If you want to run async functions in parallel, check out [`same-time`](https://github.com/IonicaBizau/same-time.js).

## Installation

```sh
$ npm i --save one-by-one
```

## Example

```js
// Dependencies
var OneByOne = require("one-by-one");

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
```

## Documentation

### `OneByOne(arr, cb)`
Calls functions one by one and memorizes the results.

#### Params
- **Array** `arr`: An array of functions getting the callback parameter in the first argument and response arguments from the previous function call.
- **Function** `cb`: The callback function called with an error (or `null`) and the results array.

#### Return
- **OneByOne** The `OneByOne` function.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`blah`](https://github.com/IonicaBizau/blah)

 - [`cdnjs-importer`](https://github.com/cdnjs/cdnjs-importer)

 - [`cobol`](https://github.com/IonicaBizau/node-cobol)

 - [`engine-tools`](https://github.com/jillix/engine-tools) by jillix

 - [`gif-cli`](https://github.com/IonicaBizau/gif-cli)

 - [`git-stats-importer`](https://github.com/IonicaBizau/git-stats-importer)

 - [`gpm`](https://github.com/IonicaBizau/gpm)

 - [`gry`](https://github.com/IonicaBizau/node-gry)

 - [`nodeice`](https://github.com/IonicaBizau/nodeice)

 - [`ssh-remote`](https://github.com/IonicaBizau/ssh-remote)

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md