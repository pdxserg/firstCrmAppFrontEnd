import {useGetCustomersQuery} from "../../../features/customers/api/customersApi.ts";
import {CustomerList} from "../Customer/CustomerList.tsx";


export const Customers = () => {
	const {data} = useGetCustomersQuery()
	const customers = data?.items


	return (
		<div>
			<CustomerList customers={customers}/>
		</div>
	);
};