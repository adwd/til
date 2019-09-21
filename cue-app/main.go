package main

import (
	"fmt"
	"syscall/js"

	"cuelang.org/go/cue"
)

func main() {
	window := js.Global()
	message := window.Get("document").Call("getElementById", "message")
	message.Set("innerHTML", "Hello, WebAssembly")

	const config = `
	msg:   "Hello \(place)!"
	place: string | *"world"
	`

	var r cue.Runtime

	instance, err := r.Compile("test", config)
	if err != nil {
		// handle error
	}

	str, _ := instance.Lookup("msg").String()
	fmt.Println(str)

	instance, _ = instance.Fill("you", "place")
	str, _ = instance.Lookup("msg").String()
	fmt.Println(str)
}
