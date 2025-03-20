
type Props={
	jobDetails:string
	setJobDetails:(text:string)=>void
}
export const JobDescription = ({jobDetails, setJobDetails}: Props) => {

	// const onchangeHandler=(e) =>setJobDetails(e.currentTarget.value)

	return (
		<>
			<textarea id="w3review" name="w3review" rows={4} cols={50}
			          value={jobDetails} onChange={(e) =>setJobDetails(e.currentTarget.value)}
			></textarea>
		</>
	)
}
