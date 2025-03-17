import styles from './NewJob.module.css'
import {useCreateJobMutation} from "../../../jobApi.ts";


export const NewJob=()=>{
	const {}= useCreateJobMutation()

return(
		<div className={styles.container}>

			<div className={styles.centerTopElement}>
				<h2>Create new job</h2>
			</div>
		</div>
)
}