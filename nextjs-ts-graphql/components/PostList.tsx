import { graphql, DataValue, OperationVariables } from 'react-apollo';

import ErrorMessage from './ErrorMessage';
import { AllPostsQuery } from '../lib/queries';
import { allPosts } from 'generated/types';
import { ApolloQueryResult } from '../node_modules/apollo-boost';

const POSTS_PER_PAGE = 10;

function PostList({
  data: { loading, error, allPosts, _allPostsMeta },
  loadMorePosts,
}: {
  data: DataValue<allPosts, OperationVariables>;
  loadMorePosts: () => Promise<ApolloQueryResult<any>>;
}) {
  if (error) return <ErrorMessage message="Error loading posts." />;
  if (loading) return <div>Loading</div>;
  if (allPosts && allPosts.length) {
    const areMorePosts = allPosts.length < _allPostsMeta.count;
    return (
      <section>
        <ul>
          {allPosts.map((post, index) => (
            <li key={post.id}>
              <div>
                <span>{index + 1}. </span>
                <a href={post.url}>{post.title}</a>
              </div>
            </li>
          ))}
        </ul>
        {areMorePosts && (
          <button onClick={loadMorePosts}>
            {' '}
            {loading ? 'Loading...' : 'Show More'}{' '}
          </button>
        )}
      </section>
    );
  }

  return null;
}

export const allPostsQueryVars = {
  skip: 0,
  first: POSTS_PER_PAGE,
};

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql<{}, allPosts>(AllPostsQuery, {
  options: {
    variables: allPostsQueryVars,
  },
  props: ({ data }) => {
    return {
      data,
      loadMorePosts: () => {
        return data.fetchMore({
          variables: {
            skip: data.allPosts.length,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult;
            }
            return {
              ...previousResult,
              // Append the new posts results to the old one
              allPosts: [
                ...previousResult.allPosts,
                ...fetchMoreResult.allPosts,
              ],
            };
          },
        });
      },
    };
  },
})(PostList);
