import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {JobType} from "../UI/job/Job.tsx";
import {CustomerType} from "../../../common/components/Create/CreateCustomer/CreateCustomer.tsx";

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
			getJobs: build.query<Response, { searchTerm:string|null|undefined }>({
				query: ({searchTerm}) => {
					return {
						url: '/api/jobs',
						method: 'GET',
						params: searchTerm !== undefined ? { searchTerm } : {},
					}
				},
				providesTags: ["Jobs"]
			}),
			getJobsById: build.query<{message:string, job:JobType}, { id:string|null|undefined }>({
				query: ({id}) => {
					return {
						url: `/api/jobs/${id}`,
						method: 'GET',

					}
				},
				providesTags: ["Jobs"]
			}),


			createJob: build.mutation<JobType, {
				customer: CustomerType,
				jobDetails: string
			}>({
				query: ({customer,   jobDetails }) => {

					return {
						method: "POST",
						url: `/api/jobs`,
						body: {customer,  jobDetails}
					}
				},
				invalidatesTags: ["Jobs"]
			}),

			updateJob: build.mutation<{message: string},{ jobId:string,
				jobDetails?:string,
				customerName?: string,
				customerEmail?: string,
				customerPhone?: string,
			}>({
				query: ({jobId, jobDetails,customerName,customerEmail,customerPhone}) => {

					return {
						method: "PUT",
						url: `/api/jobs/${jobId}`,
						body:{jobDetails,customerName,customerEmail,customerPhone}
					}
				},
				invalidatesTags: ["Jobs"]
			}),
			deleteJob: build.mutation<{ message: string }, string>({
				query: (jobId) => {
					return {
						method: "DELETE",
						url: `/api/jobs/${jobId}`,
					}
				},
				invalidatesTags: ["Jobs"]
			}),
		}
	},
})

// 7
export const {useDeleteJobMutation, useGetJobsQuery, useGetJobsByIdQuery, useCreateJobMutation, useUpdateJobMutation} = jobsApi