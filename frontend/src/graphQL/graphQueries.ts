import {gql} from "@apollo/client"

const CharacterDataQuery = gql`
query ($first: Int, $after: String) {
  allPeople(first: $first, after: $after) {
    people {
      id
      name

      species {
        name
      }

      homeworld {
        name
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
`

const CharacterDetailsQuery = gql`
  query ($personId: ID) {
    person(id: $personId) {
      name
      eyeColor
      hairColor
      skinColor
      birthYear
      vehicleConnection {
        vehicles {
          name
        }
      }
    }
  }
`

export {CharacterDataQuery, CharacterDetailsQuery}