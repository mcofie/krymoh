
# formatoid

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/formatoid.svg)](https://www.npmjs.com/package/formatoid) [![Downloads](https://img.shields.io/npm/dt/formatoid.svg)](https://www.npmjs.com/package/formatoid)

> Tiny and fast module for formatting date objects.

## :cloud: Installation

```sh
$ npm i --save formatoid
```


## :clipboard: Example



```js
const formatoid = require("formatoid");

var d = new Date(1989, 11, 21);

console.log(formatoid(d, "MM/DD/YYYY, h:mm"));
// => 12/20/1989, 12:00

console.log(formatoid(d, "MMMM D, YYYY"));
// => December 20, 1989

console.log(formatoid(d, "dddd, MMMM, D, YYYY h:m A"));
// => Wednesday, December, 20, 1989 12:0 AM

console.log(formatoid(d, "YYYYMMDDT0HHMMSSZ"));
// => 19891221T0001200+02:00

d._useUTC = true;
console.log(formatoid(d, "dddd, MMMM, D, YYYY h:m A"));
// => 19891221T0001200+02:00
```

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


## :memo: Documentation


### `formatoid(i, f)`
Formats the date into a given format.

Usable format fields:

 - **Years**
     - `YYYY` (e.g. `"2015"`)
     - `YY` (e.g. `"15"`)
 - **Months**
     - `MMMM` (e.g. `"January"`)
     - `MMM` (e.g. `"Jan"`)
     - `MM` (e.g. `"01"`)
     - `M` (e.g. `"1"`)
 - **Days**
     - `dddd` (e.g. `"Sunday"`)
     - `ddd` (e.g. `"Sun"`)
     - `dd` (e.g. `"Su"`)
     - `d` (e.g. `"Su"`)
 - **Dates**
     - `DD` (e.g. `"07"`)
     - `D` (e.g. `"7"`)
 - **AM/PM**
     - `A` (e.g. `"AM"`)
     - `a` (e.g. `"pm"`)
 - **Hours**
     - `hh` (e.g. `"07"`)–12 hour format
     - `h` (e.g. `"7"`)
     - `HH` (e.g. `"07"`)–24 hour format
     - `H` (e.g. `"7"`)
 - **Minutes**
     - `mm` (e.g. `"07"`)
     - `m` (e.g. `"7"`)
 - **Seconds**
     - `ss` (e.g. `"07"`)
     - `s` (e.g. `"7"`)
 - **Fractional seconds**
     - `S` (e.g. `0 1 2 3 ... 9`)
     - `SS` (e.g. `00 01 02 ... 98 99`)
     - `SS` (e.g. `000 001 002 ... 998 999`)
 - **Timezones**
     - `Z` (e.g. `-07:00 -06:00 ... +06:00 +07:00`)
     - `ZZ` (e.g. `-0700 -0600 ... +0600 +0700`)

#### Params
- **Date** `i`: The date object.
- **String** `f`: The date format.

#### Return
- **String** The formatted date (as string).



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
 - [`github-calendar`](https://github.com/IonicaBizau/github-calendar#readme)—Embed your GitHub contributions calendar anywhere.

## :sparkles: Related

 - [`add-subtract-date`](https://github.com/IonicaBizau/add-subtract-date#readme)—Add or subtract a specified time in a date object.



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
