a: 4
a: 5

l: [ 1, 2]
l: [ 1, 3]

list: [0, 1, 2]
val: list[3]

// order is irrelevant
a: {x: 1, y: 2}
b: {y: 2, z: 3}
c: {x: 1, z: 4}

q: a & b & c
r: b & c & a
s: c & b & a

number_types: {
	a: int
	a: 4 // type int

	b: number
	b: 4.0 // type float

	c: int
	c: 4.0

	d: 4 // will evaluate to type int (default)
}

bounds: {
	rn: >=3 & <8       // type int | float
	ri: >=3 & <8 & int // type int
	rf: >=3 & <=8.0    // type float
	rs: >="a" & <"mo"

	{
		a: rn & 3.5
		b: ri & 3.5
		c: rf & 3
		d: rs & "ma"
		e: rs & "mu"

		r1: rn & >=5 & <10
	}

}

predefined_range: {
	positive: uint
	byte:     uint8
	word:     int32

	{
		a: positive & -1
		b: byte & 128
		c: word & 2_000_000_000
	}

}

reg_exp: {
	a: "foo bar" =~ "foo [a-z]{3}"
	b: "maze" !~ "^[a-z]{3}$"

	c: =~"^[a-z]{3}$" // any string with lowercase ASCII of length 3

	d: c
	d: "foo"

	e: c
	e: "foo bar"
}

lists: {
	IP: 4 * [ uint8]

	PrivateIP: IP
	PrivateIP: [10, ...uint8] | [192, 168, ...] | [172, >=16 & <=32, ...]

	myIP: PrivateIP
	myIP: [10, 2, 3, 4]

	yourIP: PrivateIP
	yourIP: [11, 1, 2, 3]
}

interpolation_field_name: {
	sandwich: {
		type:            "Cheese"
		"has\(type)":    true
		hasButter:       true
		butterAndCheese: hasButter && hasCheese
	}
}
