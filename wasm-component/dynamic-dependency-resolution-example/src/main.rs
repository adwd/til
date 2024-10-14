use clap::Parser;
use wasmtime::{
    component::{bindgen, Component, Linker},
    Engine, Store,
};

use adwd::greet::greetable::Host;

struct Greet {
    name: String,
}

impl Greet {
    fn new(name: String) -> Self {
        Self { name }
    }
}

impl Host for Greet {
    fn name(&mut self) -> String {
        self.name.clone()
    }

    fn greet(&mut self, name: String) -> String {
        format!("Hello from {name}")
    }
}

bindgen!({
    path: "../greet/wit",
    world: "hello-world",
});

#[derive(Debug, Parser)]
struct Cli {
    wasm_file: String,
}

fn main() {
    let cli = Cli::parse();

    if let Err(e) = start(cli) {
        eprintln!("Error: {}", e);
    }
}

fn start(cli: Cli) -> anyhow::Result<()> {
    let engine = Engine::default();
    let mut linker = Linker::new(&engine);
    let mut store = Store::new(&engine, Greet::new("Native code".to_string()));

    let component = Component::from_file(&engine, &cli.wasm_file)?;

    HelloWorld::add_to_linker(&mut linker, |greet: &mut Greet| greet)?;
    let hello_world = HelloWorld::instantiate(&mut store, &component, &linker)?;

    let message = hello_world.adwd_greet_sayable().call_say(&mut store)?;
    println!("{message}");

    Ok(())
}
