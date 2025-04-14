import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {CustomerType} from "../../../common/components/Create/CreateCustomer/CreateCustomer.tsx";
import {AddressType} from "../../../common/components/Create/CreateCustomer/components/AddressInput/AddressInput.tsx";


type Response = {
	totalCount: number,
	resultCode: number,
	items: CustomerType[]

}
export const customersApi = createApi({
	reducerPath: 'customersApi',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_API_URL,
		// prepareHeaders: headers => {
		// 	headers.set('API-KEY', `${process.env.REACT_APP_API_KEY}`)
		// 	headers.set('Authorization', `Bearer ${localStorage.getItem('sn-token')}`)
		// },
	}),
	tagTypes: ["Customers"],
	endpoints: build => {
		return {
			getCustomers: build.query<Response, void>({
				query: ( ) => {
					return {
						url: `/api/customers`,
						method: 'GET',
						// params: jobNumber !== undefined ? { jobNumber } : {},
					}
				},
				providesTags: ["Customers"]
			}),
			getCustomersById: build.query<{message:string, customer:CustomerType }, { id: string |undefined }>({
				query: ({id}) => {
					return {
						url: `/api/customers/${id}`,
						method: 'GET',
						// params: jobNumber !== undefined ? { jobNumber } : {},
					}
				},
				providesTags: ["Customers"]
			}),


			createCustomer: build.mutation<CustomerType, {
				customerName: string,
				customerEmail: string,
				customerPhone: string,
				address: AddressType |undefined|null
			}>({
				query: ({customerName, customerEmail, customerPhone, address}) => {

					return {
						method: "POST",
						url: `/api/customers`,
						body: {customerName, customerEmail, customerPhone, address}
					}
				},
				invalidatesTags: ["Customers"]
			}),

			// updateJob: build.mutation<{message: string},{ id:string,
			// 	jobDetails?:string,
			// 	customerName?: string,
			// 	customerEmail?: string,
			// 	customerPhone?: string,
			// }>({
			// 	query: ({id, jobDetails,customerName,customerEmail,customerPhone}) => {
			//
			// 		return {
			// 			method: "PUT",
			// 			url: `/api/jobs/${id}`,
			// 			body:{jobDetails,customerName,customerEmail,customerPhone}
			// 		}
			// 	},
			// 	invalidatesTags: ["Customers"]
			// }),
			deleteCustomer: build.mutation<{ message: string }, string>({
				query: (id) => {
					return {
						method: "DELETE",
						url: `/api/customers/${id}`,
					}
				},
				invalidatesTags: ["Customers"]
			}),
		}
	},
})

// 7
export const {useGetCustomersQuery, useGetCustomersByIdQuery, useCreateCustomerMutation,useDeleteCustomerMutation} = customersApi