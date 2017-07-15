
# fillo

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/fillo.svg)](https://www.npmjs.com/package/fillo) [![Downloads](https://img.shields.io/npm/dt/fillo.svg)](https://www.npmjs.com/package/fillo)

> Fill a value with characters to the given size.

## :cloud: Installation

```sh
$ npm i --save fillo
```


## :clipboard: Example



```js
const fillo = require("fillo");

// Fill with with zeros (default behavior)
console.log(fillo(7));
// => "07"

console.log(fillo(142));
// => "142"

console.log(fillo(42, 5));
// => "00042"

console.log(fillo(42, 4, "#"));
// => "##42"
```

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


## :memo: Documentation


### `fillo(what, size, ch)`
Fill additional characters at the beginning of the string.

#### Params
- **String|Number** `what`: The input snippet (number, string or anything that can be stringified).
- **Number** `size`: The width of the final string (default: `2`).
- **String** `ch`: The character to repeat (default: `"0"`).

#### Return
- **String** The input value with filled characters.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`flight-tracker`](https://github.com/IonicaBizau/flight-tracker#readme)—A flight tracker in your command line.
 - [`formatoid`](https://github.com/IonicaBizau/formatoid#readme)—Tiny and fast module for formatting date objects.
 - [`timer-app`](https://github.com/IonicaBizau/timer-app#readme)—A simple timer application.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
