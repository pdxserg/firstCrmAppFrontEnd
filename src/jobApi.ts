import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {JobType} from "./features/jobs/UI/job/Job.tsx";
import {AddressType} from "./common/components/AddressInput/AddressInput.tsx";

type Response = {
	totalCount: number,
	resultCode: number,
	items: JobType[]

}
export const jobsApi = createApi({
	reducerPath: 'jobsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_API_URL,
		// prepareHeaders: headers => {
		// 	headers.set('API-KEY', `${process.env.REACT_APP_API_KEY}`)
		// 	headers.set('Authorization', `Bearer ${localStorage.getItem('sn-token')}`)
		// },
	}),
	tagTypes: ["Jobs"],
	endpoints: build => {
		return {
			getJobs: build.query<Response, { jobNumber:string|null|undefined }>({
				query: ({jobNumber}) => {
					return {
						url: '/api/jobs',
						method: 'GET',
						params: jobNumber !== undefined ? { jobNumber } : {},
					}
				},
				providesTags: ["Jobs"]
			}),


			createJob: build.mutation<JobType, {
				customerName: string,
				customerEmail: string,
				customerPhone: string,
				jobDetails: string
				address: AddressType |undefined|null
			}>({
				query: ({customerName, customerEmail, customerPhone, jobDetails,address}) => {

					return {
						method: "POST",
						url: `/api/jobs`,
						body: {customerName, customerEmail, customerPhone, jobDetails,address}
					}
				},
				invalidatesTags: ["Jobs"]
			}),

			updateJob: build.mutation<{message: string},{ id:string,
				jobDetails?:string,
				customerName?: string,
				customerEmail?: string,
				customerPhone?: string,
			}>({
				query: ({id, jobDetails,customerName,customerEmail,customerPhone}) => {

					return {
						method: "PUT",
						url: `/api/jobs/${id}`,
						body:{jobDetails,customerName,customerEmail,customerPhone}
					}
				},
				invalidatesTags: ["Jobs"]
			}),
			deleteJob: build.mutation<{ message: string }, string>({
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
export const {useDeleteJobMutation, useGetJobsQuery, useCreateJobMutation, useUpdateJobMutation} = jobsApi