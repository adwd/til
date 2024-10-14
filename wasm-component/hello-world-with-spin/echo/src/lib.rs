use serde::{Deserialize, Serialize};
use spin_sdk::http::{IntoResponse, Request, Response};
use spin_sdk::http_component;

#[derive(Deserialize)]
struct Input {
    message: String,
}

#[derive(Serialize)]
struct Output {
    echo: String,
}

impl Output {
    fn new(echo: String) -> Self {
        Self { echo }
    }
}

impl From<Input> for Output {
    fn from(input: Input) -> Self {
        Self::new(input.message)
    }
}

/// A simple Spin HTTP component.
#[http_component]
fn handle_echo(req: Request) -> anyhow::Result<impl IntoResponse> {
    println!("Handling request to {:?}", req.header("spin-full-url"));
    let input: Input = serde_json::from_slice(req.body())?;
    let output: Output = input.into();
    let output = serde_json::to_string(&output)?;
    Ok(Response::builder()
        .status(200)
        .header("content-type", "application/json")
        .body(output)
        .build())
}
