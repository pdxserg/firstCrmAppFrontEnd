import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {JobType} from "./features/jobs/UI/job/Job.tsx";


export const jobsApi = createApi({
	reducerPath: 'jobsApi',
	baseQuery: fetchBaseQuery({
		// baseUrl: process.env.VITE_API_URL,
		baseUrl: import.meta.env.VITE_API_URL || '',
		// prepareHeaders: headers => {
		// 	headers.set('API-KEY', `${process.env.REACT_APP_API_KEY}`)
		// 	headers.set('Authorization', `Bearer ${localStorage.getItem('sn-token')}`)
		// },
	}),
	endpoints: build => {
		return {
			getJobs: build.query<JobType[], void>({

				query: () => {
					return {
						url: '/api/jobs',
						method: 'GET',
					}
				},
			}),

			deleteJob: build.mutation<{message:'string'}, {id:string}>({
				query: (id) => {
					return {
						method: "DELETE",
						url: `/${id}`,
					}
				},
			}),
		}
	},
})

// 7
export const { useDeleteJobMutation, useGetJobsQuery } = jobsApi