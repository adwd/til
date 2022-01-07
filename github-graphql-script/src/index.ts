import { gql, GraphQLClient } from "graphql-request";
import {
  ClosePullRequestsMutation,
  ClosePullRequestsMutationVariables,
  PullRequestsQuery,
} from "./generated/graphql";

async function main() {
  const endpoint = "https://api.github.com/graphql";

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: "Bearer " + process.env.GITHUB_TOKEN,
    },
  });

  const query = gql`
    query PullRequests {
      repository(owner: "adwd", name: "til") {
        id
        pullRequests(states: OPEN, labels: ["dependencies"], first: 100) {
          nodes {
            id
            title
          }
        }
      }
    }
  `;

  const data = await graphQLClient.request<PullRequestsQuery>(query);
  const ids = data.repository?.pullRequests?.nodes?.map((n) => n?.id) ?? [];
  console.log(ids);

  const mutation = gql`
    mutation ClosePullRequests($prId: ID!) {
      closePullRequest(input: { pullRequestId: $prId }) {
        pullRequest {
          id
        }
      }
    }
  `;

  for (const id of ids) {
    const result = await graphQLClient.request<
      ClosePullRequestsMutation,
      ClosePullRequestsMutationVariables
    >(mutation, { prId: id! });
    console.log(result.closePullRequest);
  }
}

main();
