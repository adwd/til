import { Environment, Network, RecordSource, Store } from 'relay-runtime'

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
async function fetchRelay(params: any, variables: any) {
  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`)
  return fetchGraphQL(params.text, variables)
}

// Export a singleton instance of Relay Environment configured with our network function:
export const relayEnvironment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
})

async function fetchGraphQL(text: string, variables?: any) {
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  })

  // Get the response as JSON
  return await response.json()
}
