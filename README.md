# is-finite

Lo-Dash's `isFinite` function as a component.

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