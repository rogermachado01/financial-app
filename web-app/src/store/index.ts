import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../modules/user/reducer'

export const store = configureStore({
    reducer: {
        userState: userReducer,
      },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>