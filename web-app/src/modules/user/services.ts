import { gql } from "@apollo/client";
import { customClient } from "../apolloClient"

const GET_USER = gql`
    query {
      user(id: "asdas") {
          username
      }
    }
  `;
  
export function CreateUser() {
  const data = customClient('user').query({ query: GET_USER })

  return { data }
}