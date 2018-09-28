import React from 'react'
import { graphql, Link } from 'gatsby'
import { Starship } from '../generated/swapi-types'

interface Props {
  data: {
    swapi: Starship.Query
  }
}

class Posts extends React.Component<Props> {
  render() {
    const { Starship } = this.props.data.swapi
    return (
      <div>
        <h1>{Starship.name}</h1>
        <p>hyper drive rating: {Starship.hyperdriveRating}</p>
        <h3>pilots</h3>
        <ul>
          {Starship.pilots.map(p => (
            <li key={p.name}>
              <p>name: {p.name}</p>
              <p>height: {p.height}</p>
              {p.homeworld && <p>homeworld: {p.homeworld.name}</p>}
            </li>
          ))}
        </ul>
        <Link to="/">Go back to the homepage</Link>
      </div>
    )
  }
}

export default Posts

export const query = graphql`
  query {
    swapi {
      Starship(name: "Millennium Falcon") {
        name
        hyperdriveRating
        pilots(orderBy: height_DESC) {
          name
          height
          homeworld {
            name
          }
        }
      }
    }
  }
`
