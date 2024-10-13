use clap::Parser;
use wasmtime::{
    component::{Component, Linker, TypedFunc},
    Engine, Store,
};

#[derive(Parser, Debug)]
struct Args {
    wasm_file: String,
}

fn start(args: Args) -> anyhow::Result<()> {
    let engine = Engine::default();
    let component = Component::from_file(&engine, &args.wasm_file)?;
    let linker = Linker::new(&engine);
    let mut store = Store::new(&engine, ());
    let instance = linker.instantiate(&mut store, &component)?;

    let greetable_index = instance
        .get_export(&mut store, None, "adwd:greet/greetable")
        .unwrap();
    let greet_index = instance
        .get_export(&mut store, Some(&greetable_index), "greet")
        .unwrap();
    let name_index = instance
        .get_export(&mut store, Some(&greetable_index), "name")
        .unwrap();
    let greet: TypedFunc<(String,), (String,)> =
        instance.get_typed_func(&mut store, greet_index).unwrap();
    let name: TypedFunc<(), (String,)> = instance.get_typed_func(&mut store, name_index).unwrap();

    let argument = "world!".to_string();
    let (return_value,) = greet.call(&mut store, (argument,))?;
    greet.post_return(&mut store)?;

    println!("{return_value}");

    let (return_value,) = name.call(&mut store, ())?;
    name.post_return(&mut store)?;

    let (return_value,) = greet.call(&mut store, (return_value,))?;
    greet.post_return(&mut store)?;

    println!("{return_value}");

    Ok(())
}

fn main() {
    let args = Args::parse();

    if let Err(e) = start(args) {
        eprintln!("Error: {}", e);
    }
}
