import { gql, HttpLink } from "@apollo/client";
import { client } from "../apolloClient"
const link = new HttpLink({ uri: 'http://localhost:8080/graphql/user'})

const GET_USER = gql`
    query {
      user(id: "asdas") {
          username
      }
    }
  `;

export function CreateUser() {
  client.setLink(link)
  const data = client.query({ query: GET_USER })

  return { data }
}