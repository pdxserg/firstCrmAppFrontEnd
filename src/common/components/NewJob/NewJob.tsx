import styles from './NewJob.module.css'
import {useCreateJobMutation} from "../../../jobApi.ts";
import {ChangeEvent, useState} from "react";
import {PhoneInput} from "../PhoneInput/PhoneInput.tsx";
import {EmailInput} from "../EmailInput/EmailInput.tsx";
import {JobDescription} from "../../../features/jobs/UI/job/JobDescription.tsx";
import {toast} from "react-toastify";


export const NewJob = () => {

	 const [customerName, setCustomerName] = useState<string>("John Cooper")
	 const [customerEmail, setCustomerEmail] = useState<string>("email@gmail.com")
	 const [customerPhone, setCustomerPhone] = useState<string>("3334445566")
	 const [jobDetails, setJobDetails] = useState<string>("some text some text some text")

	const showToastMessage = () => {
		toast.success("Success!");
	};
	const [createJob] = useCreateJobMutation()

const createJobHandler=()=>{
			 createJob({customerName, customerEmail, customerPhone, jobDetails})
				 .unwrap()
				 .then(()=>toast.success("Success!"))
				 .catch((err)=>toast.error(err))
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

	return (
		<div className={styles.container}>

			<div className={styles.centerTopElement}>
				<div>
					<button onClick={showToastMessage}>Notify</button>

				</div>
				<h2>Create new job</h2>

				<label htmlFor="name">Name:</label>
				<br/>
				<input type="text" id="name" name="name" placeholder="Enter your name"
				       value={customerName} onChange={onchangeHandler}
				/>
				<br/>
				<EmailInput onchange={onchangeEmailHandler}/>
				<PhoneInput onchange={onchangePhoneHandler}/>
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