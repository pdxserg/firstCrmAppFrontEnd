import { UnknownAction } from "redux"
import { ThunkDispatch } from "redux-thunk"

import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import {jobsApi} from "../features/jobs/api/jobApi.ts";
import {customersApi} from "../features/customers/api/customersApi.ts";



export const store = configureStore({
	reducer: {
		[jobsApi.reducerPath]: jobsApi.reducer,
		[customersApi.reducerPath]: customersApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jobsApi.middleware, customersApi.middleware),
})
setupListeners(store.dispatch)
export type RootStateType = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<RootStateType, unknown, UnknownAction>

