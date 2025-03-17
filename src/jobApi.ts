import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {JobType} from "./features/jobs/UI/job/Job.tsx";

type Response = {
	totalCount: number,
	resultCode: number,
	items: JobType[]

}
export const jobsApi = createApi({
	reducerPath: 'jobsApi',
	baseQuery: fetchBaseQuery({
		// baseUrl: process.env.VITE_API_URL,
		baseUrl: import.meta.env.VITE_API_URL,
		// prepareHeaders: headers => {
		// 	headers.set('API-KEY', `${process.env.REACT_APP_API_KEY}`)
		// 	headers.set('Authorization', `Bearer ${localStorage.getItem('sn-token')}`)
		// },
	}),
	tagTypes: ["Jobs"],
	endpoints: build => {
		return {
			getJobs: build.query<Response, void>({
				query: () => {
					return {
						url: '/api/jobs',
						method: 'GET',
					}
				},
				providesTags: ["Jobs"]
			}),

			createJob: build.mutation<JobType, {
				customerName: string,
				customerEmail: string,
				customerPhone: number,
				jobDetails: string
			}>({
				query: ({customerName, customerEmail, customerPhone, jobDetails}) => {
					return {
						method: "POST",
						url: `/api/jobs`,
						body: {customerName, customerEmail, customerPhone, jobDetails}
					}
				},
				invalidatesTags: ["Jobs"]
			}),

			deleteJob: build.mutation<{ message: 'string' }, string>({
				query: (id) => {
					return {
						method: "DELETE",
						url: `/api/jobs/${id}`,
					}
				},
				invalidatesTags: ["Jobs"]
			}),
		}
	},
})

// 7
export const {useDeleteJobMutation, useGetJobsQuery, useCreateJobMutation} = jobsApi