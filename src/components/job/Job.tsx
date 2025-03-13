// @flow
export type JobType = {
	id:string,
	jobNumber:number
	customerName: string
	customerEmail:string
	customerPhone:number
	jobDescription:string

};
type Props={
	jobs: JobType[]
}

export const Job = ({jobs}:Props) => {
	return (
		<div>
			<ul>
			{jobs.map(el=>{
				return <li key={el.id}>
					<h2>{el.jobNumber}</h2>
					<h3>{el.customerName}</h3>
					<p>{el.customerPhone}</p>
					<p>{el.customerEmail}</p>
					<p>{el.jobDescription}</p>
				</li>
			})}
			</ul>
		</div>
	);
};