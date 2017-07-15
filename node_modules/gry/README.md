[![gry](http://i.imgur.com/vPz8gkX.png)](#)

# gry [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/node-gry.svg)](https://travis-ci.org/IonicaBizau/node-gry/) [![Version](https://img.shields.io/npm/v/gry.svg)](https://www.npmjs.com/package/gry) [![Downloads](https://img.shields.io/npm/dt/gry.svg)](https://www.npmjs.com/package/gry) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A minimalist NodeJS wrapper for the `git` commands. `gry` stands for the Git RepositorY.

## Installation

```sh
$ npm i --save gry
```

## Example

```js
// Dependencies
var Repo = require("gry")
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
```

## Documentation

### `Gry(options)`
Creates a new `Gry` instance.

#### Params
- **Object** `options`: An object containing the following fields:
 - `path` (String): The path to the git repository.
 - `limit` (Number): The limit of commands to run same time.

#### Return
- **Gry** The `Gry` instance.

### `exec(command, args, callback)`
Executes a git command in the repository directory.

#### Params
- **String** `command`: The git command that should be executed in the repository directory.
- **Array** `args`: An array of options passed to the spawned process. This is optional (if not provided, `exec` will be used instead).
- **Function** `callback`: The callback function.

#### Return
- **Gry** The `Gry` instance.

### `init(callback)`
Inits the git repository.

#### Params
- **Function** `callback`: The callback function.

#### Return
- **Gry** The `Gry` instance.

### `create(path, callback)`
Creates a git repository.

#### Params
- **String** `path`: The path of the repository.
- **Function** `callback`: The callback function

#### Return
- **Gry** The `Gry` instance.

### `commit(message, options, callback)`
Creates a commit, providing the `message`.

#### Params
- **String** `message`: The commit message
- **String** `options`: Additional options passed to the commit command.
- **Function** `callback`: The callback function.

#### Return
- **Gry** The `Gry` instance.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`bloggify`](https://github.com/Bloggify/bloggify-tools)

 - [`cdnjs-importer`](https://github.com/cdnjs/cdnjs-importer)

 - [`engine-tools`](https://github.com/jillix/engine-tools) by jillix

 - [`gh-contributions`](https://github.com/IonicaBizau/github-contributions)

 - [`git-issues`](https://github.com/softwarescales/git-issues) by Gabriel Petrovay

 - [`git-stats`](https://github.com/IonicaBizau/git-stats)

 - [`git-stats-importer`](https://github.com/IonicaBizau/git-stats-importer)

 - [`gpm`](https://github.com/IonicaBizau/gpm)

 - [`repo-downloader`](https://github.com/IonicaBizau/repository-downloader)

 - [`ssh-remote`](https://github.com/IonicaBizau/ssh-remote)

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md