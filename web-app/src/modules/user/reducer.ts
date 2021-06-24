import { createSlice } from '@reduxjs/toolkit'
import { CreateUser } from './services'

interface UserState {
    value: number
}

const initialState: UserState = {
    value: 0
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    create: (state) => {
        const { data } = CreateUser()
        console.log(data)
        state.value += 1
    },
    login: (state) => {
      state.value -= 1
    },
    update: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { create, login, update } = userSlice.actions

export default userSlice.reducer