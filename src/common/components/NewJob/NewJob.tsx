import styles from './NewJob.module.css'
import {useCreateJobMutation} from "../../../features/jobs/api/jobApi.ts";
import {ChangeEvent, useState} from "react";
import {PhoneInput} from "../PhoneInput/PhoneInput.tsx";
import {EmailInput} from "../EmailInput/EmailInput.tsx";
import {JobDescription} from "../JobDescription/JobDescription.tsx";
import {toast} from "react-toastify";
import {AddressInput, AddressType} from "../AddressInput/AddressInput.tsx";


export const NewJob = () => {

	 const [customerName, setCustomerName] = useState<string>("John Cooper")
	 const [customerEmail, setCustomerEmail] = useState<string>("email@gmail.com")
	 const [customerPhone, setCustomerPhone] = useState<string>("3334445566")
	 const [jobDetails, setJobDetails] = useState<string>("some text some text some text")
	const [address, setAddress]=useState<AddressType|undefined|null>(null)

	const [createJob] = useCreateJobMutation()

const createJobHandler=()=>{
			 createJob({customerName, customerEmail, customerPhone, jobDetails,address})
				 .unwrap()
				 .then(()=>toast.success("Success!"))
				 .catch((error) => { // Type assertion
					 if (error && error.data && error.data.error) {
						 toast.error(error.data.error);
					 } else {
						 toast.error("An unexpected error occurred.");
					 }
				 });
}

const onchangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
		setCustomerName(e.currentTarget.value)
	}

	const onchangeEmailHandler=(email:string)=>{
		setCustomerEmail(email)
	}
	const onchangePhoneHandler=(phoneNumber:string)=>{
		setCustomerPhone(phoneNumber)
	}
	const onchangeAddress=(newAddress:AddressType|undefined|null)=>{
		setAddress(newAddress)
	}

	return (
		<div className={styles.container}>

			<div className={styles.centerTopElement}>
				<h2>Create new job</h2>

				<label htmlFor="name">Name:</label>
				<br/>
				<input type="text" id="name" name="name" placeholder="Enter your name"
				       value={customerName} onChange={onchangeHandler}
				/>
				<br/>
				<PhoneInput onchange={onchangePhoneHandler}/>
				<br/>
				<AddressInput onchangeAddress={onchangeAddress}/>
				<EmailInput onchange={onchangeEmailHandler}/>
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