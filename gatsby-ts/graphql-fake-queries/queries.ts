import { graphql } from 'gatsby'

export const StarshipQuery = graphql`
  query Starship {
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
`
