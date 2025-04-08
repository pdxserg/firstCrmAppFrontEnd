import styles from './NewJob.module.css'
import {useCreateJobMutation} from "../../../features/jobs/api/jobApi.ts";
import {useEffect, useRef, useState} from "react";
import {JobDescription} from "../JobDescription/JobDescription.tsx";
import {toast} from "react-toastify";
import AutoTypeInput from "../MyInputWithDropdown/MyInputWithDropdown.tsx";
import {useGetCustomersQuery} from "../../../features/customers/api/customersApi.ts";
import {CustomerType} from "../Create/CreateCustomer.tsx";



export const NewJob = () => {

	const [customerId, setCustomerId] = useState<string | undefined | null>(undefined)
	const [jobDetails, setJobDetails] = useState<string>("some text some text some text")

	const {data} = useGetCustomersQuery()
	const customers:CustomerType[]|undefined = data?.items
	const [selectedName, setSelectedName] = useState<string | undefined>('');

	const isFirstRender = useRef(true);

	useEffect(() => {
		// Skip the first render
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}

		// Now this code will only run on subsequent renders when customers changes
		if (customers ) {
			const latestCustomer = customers[customers.length - 1];
			handleNameSelect(latestCustomer.customerName, latestCustomer.id);
		}
	}, [customers]);

	const handleNameSelect = (name: string | undefined, id?: string) => {
		setCustomerId(id)
		setSelectedName(name);
	};


	const [createJob] = useCreateJobMutation()

	const createJobHandler = () => {
		const customer = data?.items.find((item) => item.id === customerId)
		if (customer) {
			createJob({customer, jobDetails})
				.unwrap()
				.then(() => toast.success("Success!"))
				.catch((error) => { // Type assertion
					if (error && error.data && error.data.error) {
						toast.error(error.data.error);
					} else {
						toast.error("An unexpected error occurred.");
					}
				});
		}

	}

	return (
		<div className={styles.container}>

			<div className={styles.centerTopElement}>
				<h2>Create new job</h2>
				<div>
					Customer
					<AutoTypeInput customers={customers} onSelect={handleNameSelect}/>
					{selectedName && <span>Selected: {selectedName}</span>}
				</div>
				<br/>

				<JobDescription jobDetails={jobDetails}
				                setJobDetails={(newDescription) => setJobDetails(newDescription)}
				/>
				<br/>
				<button  disabled={!selectedName} onClick={createJobHandler}>Add</button>
			</div>
		</div>
	)
}
