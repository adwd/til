
// a doc comment
one: 1
two: 2 // a line comment

"two-and-a-half": 2.5

list: [1, 2, 3]
outer middle inner:  3
outer middle2 inner: 7

numbers: [
	1_234,       // 1234
	5M,          // 5_000_000
	1.5Gi,       // 1_610_612_736
	0x1000_0000, // 268_435_456
]

// 21-bit unicode characters
a: "\U0001F60E" // 😎

// multiline strings
b: """
    Hello
    World!
    """

msg1: #"The sequence "\U0001F604" renders as \#U0001F604."#

msg2: ##"""
    A regular expression can conveniently be written as:

        #"\d{3}"#

    This construct works for bytes, strings and their
    multi-line variants.
    """##

bytes: {
	a: '\x03abc' // hexadecimal
	b: '\127'    // octal
}

references: {
	v: 1
	a: {
		v: 2
		b: v // matches the inner v
	}
	a: {
		c: v // matches the top-level v
	}
	b: v
}

fields: {
	a: {
		b:     2
		"c-e": 5
	}
	v: a.b
	w: a["c-e"]
}

alias: {
	A = a // A is an alias for a
	a: {
		d: 3
	}
	b: {
		a: {
			// A provides access to the outer "a" which would
			// otherwise be hidden by the inner one.
			c: A.d
		}
	}
}

hidden_fields: {
	"_foo": 2
	_bar:   3
	baz:    4
}

duplicated_fields: {
	a: 4
	a: 4

	s: {
		x: 1
	}
	s: {
		y: 2
	}

	l: [ 1, 2]
	l: [ 1, 2]
}

bottom: {
	a: 4
	// a: 5

	l: [ 1, 2]
	// l: [ 1, 3 ]

	list: [0, 1, 2]
	// val: list[3]
}
