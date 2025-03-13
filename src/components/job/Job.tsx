// @flow
import styles from './Job.module.css'

export type JobType = {
	id: string,
	jobNumber: number
	customerName: string
	customerEmail: string
	customerPhone: number
	jobDetails: string

};
type Props = {
	jobs: JobType[]
}

export const Job = ({jobs}: Props) => {

	const deleteJobHandler=()=>{

	}
	return (
		<>

			{jobs.map(el => {
				return <li key={el.id} className={styles.job}>
					<h2>Job # {el.jobNumber}</h2>
					<h3>Name: {el.customerName}</h3>
					<p>Phone: {el.customerPhone}</p>
					<p>Email: {el.customerEmail}</p>
					<p>Description: {el.jobDetails}</p>
					<button onClick={()=>deleteJobHandler()}>Delete</button>
				</li>

			})}

		</>
	);
};