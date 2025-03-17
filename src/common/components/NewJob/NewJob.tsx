import styles from './NewJob.module.css'
import {useCreateJobMutation} from "../../../jobApi.ts";
import {useState} from "react";


// customerName: string,
// 	customerEmail: string,
// 	customerPhone: number,
// 	jobDetails: string
export const NewJob = () => {

	 const [customerName, setCustomerName] = useState<string>("")
	 const [customerEmail, setCustomerEmail] = useState<string>("")
	 const [customerPhone, setCustomerPhone] = useState<number>(0)
	 const [jobDetails, setJobDetails] = useState<string>("")


// const customerName ="Brad Spring"
// 	const customerEmail= "johnspring@gmail.com"
// 	const customerPhone = 3661515
// 	const jobDetails= "Lorem ipsum"

	const [createJob] = useCreateJobMutation()

const createJobHandler=()=>{
	createJob({customerName, customerEmail, customerPhone, jobDetails})
		.then(()=>{alert("Success")})
}

// const onchangeHandler=(e)=>{
// 		setCustomerName(e.currentTarget.value)
// 	}
	return (
		<div className={styles.container}>

			<div className={styles.centerTopElement}>
				<h2>Create new job</h2>

				<label htmlFor="name">Name:</label>
				<input type="text" id="name" name="name" placeholder="Enter your name"
				value={customerName} onChange={(e)=>setCustomerName(e.currentTarget.value)}
				/>
				<br/>
				<label htmlFor="name1">Email:</label><br/>
				<input type="text" id="name1" name="name1" placeholder="some@gmail.com"
				       value={customerEmail} onChange={(e)=>setCustomerEmail(e.currentTarget.value)}
				/>
				<br/>
				<label htmlFor="name2">Phone number:</label><br/>
				<input type="number" id="name2" name="name2" placeholder="333 33 33"
				       value={customerPhone} onChange={(e)=>setCustomerPhone(parseInt(e.currentTarget.value)||0)}
				/>
				<br/>
				<label htmlFor="w3review">Description:</label>
				<textarea id="w3review" name="w3review" rows={4} cols={50}
				          value={jobDetails} onChange={(e)=>setJobDetails(e.currentTarget.value)}
				></textarea>
				<br/>
				<button onClick={createJobHandler}>Add</button>
			</div>
		</div>
	)
}