*This repository is a mirror of the [component](http://component.io) module [kenany/is-finite](http://github.com/kenany/is-finite). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/kenany-is-finite`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# is-finite

Lo-Dash's `isFinite` function as a component.

[![browser support](https://ci.testling.com/KenanY/is-finite.png)](https://ci.testling.com/KenanY/is-finite)

## Installation

``` bash
$ component install KenanY/is-finite
```

## API

``` javascript
var isFinite = require('is-finite');
```

### isFinite(value)

Checks if `value` is, or can be coerced to, a finite number.

Note that this is not the same as native `isFinite` which will return true for
booleans and empty strings. See <http://es5.github.io/#x15.1.2.5>.