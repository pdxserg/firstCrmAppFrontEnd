// @flow

import {Job, JobType} from "./job/Job.tsx";


const jobs: JobType[]=[
	{id:'1', jobNumber: 1 , customerName:'Maik', customerEmail:"@", customerPhone: 3332222, jobDescription:'some description' },
	{id:'2', jobNumber: 2 , customerName:'Bob', customerEmail:"@", customerPhone: 3332222, jobDescription:'some description' },
	{id:'3', jobNumber: 3 , customerName:'Darren', customerEmail:"@", customerPhone: 3332222, jobDescription:'some description' }
]
export const Jobs = () => {

	return (
		<div>
			<ul>
			<Job jobs={jobs}/>
			</ul>
		</div>
	);
};