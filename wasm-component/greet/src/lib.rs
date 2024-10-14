#[allow(warnings)]
mod bindings;

use crate::bindings::exports::adwd::greet::greetable::Guest;

struct Component;

impl Guest for Component {
    fn name() -> String {
        "Wasm Component".to_string()
    }

    fn greet(name: String) -> String {
        format!("Hello, {}!", name)
    }
}

bindings::export!(Component with_types_in bindings);
