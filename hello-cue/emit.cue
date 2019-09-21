// "Hello \(who)!"
// who: "world"

// basic types
// null bool string bytes int float

point: {
	x: number
	y: number
}

xaxis: point
xaxis x: 0

yaxis: point
yaxis y: 0

origin: xaxis & yaxis

conn: {
	address:  string
	port:     int
	protocol: "tcp" | "udp"
}

lossy: conn & {
	address:  "1.2.3.4"
	port:     8888
	protocol: "udp"
}

default_values: {
	// any positive number, 1 is the default
	replicas: uint | *1

	// the default value is ambiguous
	protocol: *"tcp" | "udp"
	protocol: *"udp" | "tcp"
}

disjunctions_struct: {
	// floor defines the specs of a floor in some house.
	floor: {
		level:   int  // the level on which this floor resides
		hasExit: bool // is there a door to exit the house?
	}

	// constraints on the possible values of floor.
	floor: {
		level:   0 | 1
		hasExit: true
	} | {
		level:   -1 | 2 | 3
		hasExit: false
	}
}

templates: {
	// The following struct is unified with all elements in job.
	// The name of each element is bound to Name and visible in the struct.
	job <Name>: {
		name:     Name
		replicas: uint | *1
		command:  string
	}

	job list command: "ls"

	job nginx: {
		command:  "nginx"
		replicas: 2
	}
}

operators: {
	a: 3 / 2   // type float
	b: 3 div 2 // type int: Euclidean division

	b1: 10 quo 3
	b2: 7 rem 4

	c: 3 * "blah"
	d: 3 * [1, 2, 3]

	e: 8 < 10
}

interpolations: {
	msg: "You are \( cost-budget ) dollars over budget!"

	cost:   102
	budget: 88
}

list_comprehensions: {
	result: [ x * x for x in items if x rem 2 == 0 ]

	items: [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
}

field_comprehensions: {

	a: [ "Barcelona", "Shanghai", "Munich"]

	{
		for k, v in a {
			"\(v)": {
				pos:     k + 1
				name:    v
				nameLen: len(v)
			}
		}
	}

}

conditional_fiels: {
	price: number

	// Require a justification if price is too high
	if price > 100 {
		justification: string
	}

	price: 200
}

null_coalescing: {
	list: [ "Cat", "Mouse", "Dog"]

	a: *list[0] | "None"
	b: *list[5] | "None"

	n: [null]
	v: *(boo[0] & string) | "default"
}
