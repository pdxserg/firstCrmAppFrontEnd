// @flow
import styles from './Job.module.css'
import {useDeleteJobMutation} from "../../../../jobApi.ts";

export type JobType = {
	id: string,
	jobNumber: number
	customerName: string
	customerEmail: string
	customerPhone: number
	jobDetails: string

};
type Props = {
	jobs: JobType[] | undefined
}

export const Job = ({jobs}: Props) => {
	const [deleteTask] = useDeleteJobMutation()
	// const removeTask = () => {
	// 	updateEntityStatus("loading")
	// 	deleteTask({ taskId: task.id, todolistId: todo.id })
	// 		.unwrap()
	// 		.then(() => {
	// 			updateEntityStatus("succeeded")
	// 		})
	// 		.catch(() => {
	// 			updateEntityStatus("failed")
	// 		})
	// }
	const deleteJobHandler=(id:string)=>{
		deleteTask({ id})
	}
	return (
		<>

			{jobs!.map(el => {
				return <li key={el.id} className={styles.job}>
					<h2>Job # {el.jobNumber}</h2>
					<h3>Name: {el.customerName}</h3>
					<p>Phone: {el.customerPhone}</p>
					<p>Email: {el.customerEmail}</p>
					<p>Description: {el.jobDetails}</p>
					<button onClick={()=>deleteJobHandler(el.id)}>Delete</button>
				</li>

			})}

		</>
	);
};