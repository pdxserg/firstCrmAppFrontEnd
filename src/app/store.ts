import { UnknownAction } from "redux"
import { ThunkDispatch } from "redux-thunk"

import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import {jobsApi} from "../jobApi.ts";



export const store = configureStore({
	reducer: {
		[jobsApi.reducerPath]: jobsApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jobsApi.middleware),
})
setupListeners(store.dispatch)
export type RootStateType = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<RootStateType, unknown, UnknownAction>

