use clap::Parser;
use wasmtime::{
    component::{bindgen, Component, Linker},
    Engine, Store,
};

bindgen!({
    world: "greetable-provider",
    path: "../greet/wit"
});

#[derive(Parser, Debug)]
struct Args {
    wasm_file: String,
}

fn start(args: Args) -> anyhow::Result<()> {
    let engine = Engine::default();
    let component = Component::from_file(&engine, &args.wasm_file)?;
    let linker = Linker::new(&engine);
    let mut store = Store::new(&engine, ());

    let provider = GreetableProvider::instantiate(&mut store, &component, &linker)?;
    let greetable = provider.adwd_greet_greetable();

    let message = greetable.call_greet(&mut store, "world")?;
    println!("{}", message);

    let name = greetable.call_name(&mut store)?;
    let message = greetable.call_greet(&mut store, &name)?;
    println!("{}", message);

    Ok(())
}

fn main() {
    let args = Args::parse();

    if let Err(e) = start(args) {
        eprintln!("Error: {}", e);
    }
}
