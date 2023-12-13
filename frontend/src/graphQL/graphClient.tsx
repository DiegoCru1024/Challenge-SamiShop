import {ApolloClient, InMemoryCache} from "@apollo/client"

const clientInstance = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache()
})

export default clientInstance
