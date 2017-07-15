
# diff-dates

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/diff-dates.svg)](https://www.npmjs.com/package/diff-dates) [![Downloads](https://img.shields.io/npm/dt/diff-dates.svg)](https://www.npmjs.com/package/diff-dates)

> Make date differences.

## :cloud: Installation

```sh
$ npm i --save diff-dates
```


## :clipboard: Example



```js
const diffDates = require("diff-dates");

var present = new Date(2015, 11, 16)
  , romanianRevolution = new Date(1989, 11, 16)
  ;

console.log(diffDates(present, romanianRevolution));
// => 820454400000

console.log(diffDates(present, romanianRevolution, "years"));
// => 26

console.log(diffDates(present, romanianRevolution, "months"));
// => 312

console.log(diffDates(present, romanianRevolution, "days"));
// => 9496

console.log(diffDates(present, romanianRevolution, "hours"));
// => 227904

console.log(diffDates(present, romanianRevolution, "minutes"));
// => 13674240

console.log(diffDates(present, romanianRevolution, "seconds"));
// => 820454400
```

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


## :memo: Documentation


### `diffDates(d1, d2, units)`
Makes a difference between the first date object (`d1`) and the second one (`d1`).

#### Params
- **String** `d1`: The first date object.
- **Date** `d2`: The second date object.
- **String** `units`: One of the following string values (by default it will be the `milliseconds`):
 - `"years"`
 - `"weeks"`
 - `"months"`
 - `"days"`
 - `"hours"`
 - `"minutes"`
 - `"seconds"`
 - `"milliseconds"`

#### Return
- **Number** The difference result in specified units.



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


 - [`daty`](https://github.com/IonicaBizau/daty#readme)—A tiny library to manage date objects.

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
