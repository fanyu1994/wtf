import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import conterReducer from './conterSlice'
import tokenReducer from "./token"
export const store = configureStore({
  reducer: {
    conterReducer,
    tokenReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

