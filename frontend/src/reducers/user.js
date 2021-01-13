import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  login: {
    accessToken: null,
    userId: 0,
    secretMessage:null,
    errorMessage:null, 
    name: null, 
  }
}

export const user = createSlice({
  name:'user',
  initialState: initialState,
  reducers: {
    setAccessToken: ( state, action) => {
      const { accessToken } = action.payload
      console.log(`Access token: ${accessToken}`)
      state.login.accessToken = accessToken
    },
    setUserId: (state, action) => {
      const { userId } = action.payload
      console.log(`User id: ${userId}`)
      state.login.userId = userId
    },
    setUserName: (state,action) => {
      const { name } = action.payload
      state.login.name = name
    },
    setSecretMessage: (state, action) => {
      const { secretMessage } = action.payload
      state.login.secretMessage = secretMessage
    },
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload
      state.login.errorMessage = errorMessage
    },
    logout: (state, action) => {
      console.log('logging out')
      state.login.userId = 0
      state.login.accessToken = null
    }, 
  }
})

export const logout = () => {
  return (dispatch) => {
    dispatch(user.actions.setSecretMessage({ secretMessage: null }))
    dispatch(user.actions.setErrorMessage({ errorMessage: null }))
    dispatch(user.actions.setAccessToken({ accessToken: null }))
    dispatch(user.actions.setUserId({ userId: 0 }))
}}