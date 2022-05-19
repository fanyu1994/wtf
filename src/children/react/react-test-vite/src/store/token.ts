import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface gettoken {
  token: string
  name: string,
  age?: number,
  user_id: string
}

const initialState = {
  token: "",
  user_info: {
    name: "",
    age: 0,
    user_id: ""
  }
}
export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    set_token: (state: typeof initialState, action: PayloadAction<gettoken>) => {
      const res = {} as gettoken
      state.token = res.token
      state.user_info = {
        name: res.token,
        age: res.age!,
        user_id: res.user_id
      }
    },
    clear_token: (state: typeof initialState) => {
      state.token = ""
      state.user_info = {
        name: "",
        age: 0,
        user_id: ""
      }
    }
  }
})

export const { set_token, clear_token } = tokenSlice.actions;

export default tokenSlice.reducer
