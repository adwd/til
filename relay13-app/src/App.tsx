import { graphql, useLazyLoadQuery } from 'react-relay'
import { AppRepositoryNameQuery } from './__generated__/AppRepositoryNameQuery.graphql'

function App() {
  const data = useLazyLoadQuery<AppRepositoryNameQuery>(
    graphql`
      query AppRepositoryNameQuery {
        repository(owner: "facebook", name: "relay") @required(action: LOG) {
          name
        }
      }
    `,
    {}
  )

  return (
    <div>
      <p>{data?.repository.name}</p>
    </div>
  )
}

export default App
