import { gql, HttpLink } from "@apollo/client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../apolloClient"
const link = new HttpLink({ uri: 'http://localhost:8080/graphql/user'})

const CREATE_USER = gql`
    mutation createUser($data: CreateUser) {
      createUser(data:$data) {
          username,
          email,
          id
      }
    }
  `;

export type CreateUser = {
  password: string;
  email: string;
}

export const createUser = createAsyncThunk(
  'users/createUser',
  async (createUser: CreateUser, thunkAPI) => {
    client.setLink(link)

    const response = await client.mutate({ mutation: CREATE_USER,
      variables: { data: createUser },
    })
    return response.data.createUser
  }
)