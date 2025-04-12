import {useGetCustomersQuery} from "../../../features/customers/api/customersApi.ts";
import {CustomerList} from "./CustomerList.tsx";


export const Customers = () => {
	const {data} = useGetCustomersQuery()
	const customers = data?.items


	return (
		<div>
			<CustomerList customers={customers}  />
		</div>
	);
};