import styles from './NewJob.module.css'
import {useCreateJobMutation} from "../../../jobApi.ts";
import {ChangeEvent, useState} from "react";
import {PhoneInput} from "../PhoneInput/PhoneInput.tsx";
import {EmailInput} from "../EmailInput/EmailInput.tsx";


// customerName: string,
// 	customerEmail: string,
// 	customerPhone: number,
// 	jobDetails: string
export const NewJob = () => {

	 const [customerName, setCustomerName] = useState<string>("First Last")
	 const [customerEmail, setCustomerEmail] = useState<string>("email@gmail.com")
	 const [customerPhone, setCustomerPhone] = useState<string>("")
	 const [jobDetails, setJobDetails] = useState<string>("")
console.log(!jobDetails)

// const customerName ="Brad Spring"
// 	const customerEmail= "johnspring@gmail.com"
// 	const customerPhone = 3661515
// 	const jobDetails= "Lorem ipsum"

	const [createJob] = useCreateJobMutation()

const createJobHandler=()=>{
			 createJob({customerName, customerEmail, customerPhone, jobDetails})
				 .unwrap()
				 .then(()=>{alert("Success")})
				 .catch(()=>{alert("Bud request")})
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
				<label htmlFor="w3review">Description:</label>
				<br/>
				<textarea id="w3review" name="w3review" rows={4} cols={50}
				          value={jobDetails} onChange={(e) => setJobDetails(e.currentTarget.value)}
				></textarea>
				<br/>
				<button onClick={createJobHandler}>Add</button>
			</div>
		</div>
	)
}