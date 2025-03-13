// @flow
import styles from './Jobs.module.css'
import {Job, JobType} from "../job/Job.tsx";


const jobs: JobType[]=[
	{id:'1', jobNumber: 1 , customerName:'Maik', customerEmail:"@", customerPhone: 3332222, jobDetails:'some description' },
	{id:'2', jobNumber: 2 , customerName:'Bob', customerEmail:"@", customerPhone: 3332222, jobDetails:'some description' },
	{id:'3', jobNumber: 3 , customerName:'Darren', customerEmail:"@", customerPhone: 3332222, jobDetails:'some description' }
]
export const Jobs = () => {

	return (
		<div>
			<button>My schedule</button>
			<ul className={styles.jobs}>
			<Job jobs={jobs}/>
			</ul>
		</div>
	);
};