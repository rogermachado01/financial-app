import { createSlice } from '@reduxjs/toolkit'
import { createUser } from './services'

interface UserState {
  loading: boolean
    user: {
      email: string
      id: string
      username: string
    }
}

const initialState: UserState = {
  loading: false,
    user: {
      email: '',
      id: '',
      username: '',
    }
}

export const userSlice = createSlice({
  name: 'userState',
  initialState,
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(createUser.fulfilled, (state, action) => {
        // Add user to the state array
        console.log('FULFILLED', createUser.typePrefix)
        state.user = action.payload
      })

      builder.addCase(createUser.pending, (state, action) => {
        // Add user to the state array
        console.log('PENDING', createUser.typePrefix)
        state.loading = true
      })
    },
  reducers: {
    create: (state) => {
    },
    login: (state) => {
    },
    update: (state, action) => {
    },
  },
})

// Action creators are generated for each case reducer function
export const { create, login, update } = userSlice.actions

export default userSlice.reducer

