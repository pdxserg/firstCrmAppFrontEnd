import { useState} from "react";


type Props = {
	value: string
	onChange: (newDescription: string) => void
}

export const EditableSpan = ({ value, onChange }: Props) => {
	const [editMode, setEditMode] = useState(false)
	const [newValue, setNewValue] = useState(value)

	const activateEditModeHandler = () => {
		setEditMode(true)
	}

	const deactivateEditModeHandler = () => {
		setEditMode(false)
		onChange(newValue)
	}

	// const changeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
	// 	setNewValue(event.currentTarget.value)
	// }
	// setJobDetails(e.currentTarget.value)
	return (
		<>
			{editMode ? (<>

					<textarea
						rows={4}
						cols={50}
						value={newValue}
						onChange={(e) => setNewValue(e.currentTarget.value)}
						onBlur={deactivateEditModeHandler}
						autoFocus
					></textarea>
				</>

				// <TextField
				// 	variant={"outlined"}
				// 	value={title}
				// 	size={"small"}
				// 	onChange={changeTitleHandler}
				// 	onBlur={deactivateEditModeHandler}
				// 	autoFocus
				// />
			) : (
				<span onDoubleClick={activateEditModeHandler}>{value}</span>
			)}
		</>
	)
}
