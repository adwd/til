package a

import (
	// built-in modules
	"encoding/json"
	"math"

	// user defined modules
	"io.github.adwd/foo"
	"io.github.adwd/foo/inner"
)

bar: [foo.a, foo.b]
data: json.Marshal({a: math.Sqrt(inner.c)})

// note
// root directory of module files must be pkg
// first package path component must be domain name
