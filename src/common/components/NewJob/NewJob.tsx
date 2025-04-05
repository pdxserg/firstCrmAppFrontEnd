import styles from './NewJob.module.css'
import {useCreateJobMutation} from "../../../features/jobs/api/jobApi.ts";
import {useState} from "react";
import {JobDescription} from "../JobDescription/JobDescription.tsx";
import {toast} from "react-toastify";
import AutoTypeInput from "../MyInputWithDropdown/MyInputWithDropdown.tsx";
import {useGetCustomersQuery} from "../../../features/customers/api/customersApi.ts";


export const NewJob = () => {

	const [customerId, setCustomerId] = useState<string | undefined | null>(undefined)
	const [jobDetails, setJobDetails] = useState<string>("some text some text some text")

	const {data} = useGetCustomersQuery()
	const names = data?.items
	const [selectedName, setSelectedName] = useState<string | undefined>('');
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
		}else{
			const customer = data?.items[data.items.length-1]
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
					})
		}

	}}

	return (
		<div className={styles.container}>

			<div className={styles.centerTopElement}>
				<h2>Create new job</h2>
				<div>
					Customer
					<AutoTypeInput names={names} onSelect={handleNameSelect}/>
					{selectedName && <div>
                        <span>Selected: {selectedName}</span>
						{/*<button onClick={()=>setShow1(true)}>x</button>*/}
                    </div>
					}
				</div>
				<br/>

				<JobDescription jobDetails={jobDetails}
				                setJobDetails={(newDescription) => setJobDetails(newDescription)}
				/>
				<br/>
				<button onClick={createJobHandler}>Add</button>
			</div>
		</div>
	)
}
