#[allow(warnings)]
mod bindings;

use crate::bindings::exports::adwd::greet::sayable::Guest;
use bindings::adwd::greet::greetable::{greet, name};

struct Component;

impl Guest for Component {
    fn say() -> String {
        let name = name();
        greet(&name)
    }
}

bindings::export!(Component with_types_in bindings);
