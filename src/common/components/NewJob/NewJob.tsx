import styles from './NewJob.module.css'
import {useCreateJobMutation} from "../../../jobApi.ts";


// customerName: string,
// 	customerEmail: string,
// 	customerPhone: number,
// 	jobDetails: string
export const NewJob = () => {

	// const [customerName, setCustomerName] = useState("")

const customerName ="Brad Spring"
	const customerEmail= "johnspring@gmail.com"
	const customerPhone = 3661515
	const jobDetails= "Lorem ipsum"
	const [createJob] = useCreateJobMutation()

const createJobHandler=()=>{
	createJob({customerName, customerEmail, customerPhone, jobDetails})
}
	return (
		<div className={styles.container}>

			<div className={styles.centerTopElement}>
				<h2>Create new job</h2>

				<button onClick={createJobHandler}>Add</button>
			</div>
		</div>
	)
}