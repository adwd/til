// Only needed due to 2018 edition because the macro is not accessible.
#[macro_use]
extern crate juniper;
use juniper::{EmptyMutation, FieldResult, Variables};

#[derive(juniper::GraphQLEnum, Clone, Copy)]
enum Episode {
    NewHope,
    Empire,
    Jedi,
}

// Arbitrary context data.
struct Ctx(Episode);

impl juniper::Context for Ctx {}

struct Query;

#[juniper::object(
    Context = Ctx,
)]
impl Query {
    fn favoriteEpisode(context: &Ctx) -> FieldResult<Episode> {
        Ok(context.0)
    }
}

// A root schema consists of a query and a mutation.
// Request queries can be executed against a RootNode.
type Schema = juniper::RootNode<'static, Query, EmptyMutation<Ctx>>;

fn main() {
    // Create a context object.
    let ctx = Ctx(Episode::NewHope);

    // Run the executor.
    let (res, _errors) = juniper::execute(
        "query { favoriteEpisode }",
        None,
        &Schema::new(Query, EmptyMutation::new()),
        &Variables::new(),
        &ctx,
    )
    .unwrap();

    // Ensure the value matches.
    assert_eq!(
        res,
        graphql_value!({
            "favoriteEpisode": "NEW_HOPE",
        })
    );
}
