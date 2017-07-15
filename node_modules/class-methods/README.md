
# class-methods

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/class-methods.svg)](https://www.npmjs.com/package/class-methods) [![Downloads](https://img.shields.io/npm/dt/class-methods.svg)](https://www.npmjs.com/package/class-methods)

> Get the methods of a JavaScript class.

## :cloud: Installation

```sh
$ npm i --save class-methods
```


## :clipboard: Example



```js
const classMethods = require("class-methods");

class Person {
    constructor (name) {
        this.setName(name);
    }
    setName (name) {
        this.name = name;
    }
    getName (name) {
        return this.name;
    }
}

class Worker extends Person {
    constructor (name, job) {
        super(name);
        this.setJob(job);
    }
    setJob (job) {
        this.job = job;
    }
    getJob (job) {
        return this.job;
    }
    static randomName () {
        // Yes, it's random enough :D
        return ["Alice", "Bob"][0];
    }
}

console.log(classMethods(Worker));
// [ 'setJob', 'getJob', 'setName', 'getName' ]

console.log(classMethods(Person));
// [ 'setName', 'getName' ]

console.log(classMethods(Worker, {
    deep: false
}));
// [ 'setJob', 'getJob' ]

console.log(classMethods(Worker, {
    includeStatic: true
}));
// [ 'setJob', 'getJob', 'randomName', 'setName', 'getName' ]
```

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


## :memo: Documentation


### `classMethods(input, options)`
Get the methods of a JavaScript class.

#### Params
- **Class** `input`: The class you want to get the methods of.
- **Object** `options`: An object containing the following fields:
 - `deep` (Boolean): If `false` the parent classes will not be iterated.
 - `includeStatic` (Boolean): If `true`, the static methods will be included too.

#### Return
- **Array** The class methods.



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
 - [`debuk`](https://github.com/udnisap/debuk#readme) (by Pasindu Perera)—Debug and performance test your code with a minimum setup

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

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
