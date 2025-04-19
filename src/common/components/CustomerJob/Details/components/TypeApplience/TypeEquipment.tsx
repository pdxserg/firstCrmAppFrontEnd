import React, { useState, ChangeEvent } from 'react';
import styles from './TypeEquipment.module.css';
import {JobType} from "../../../../../../features/jobs/UI/job/Job.tsx";






interface AdSourceSelectProps {
	jobInfo: JobType;

}

const TypeEquipment = ({jobInfo }:AdSourceSelectProps) => {
	const [isAddingNew, setIsAddingNew] = useState(false);
	const [newAdSource, setNewAdSource] = useState('');
	const [customAdSources, setCustomAdSources] = useState<string[]>([]);

	const options=["Dryer", "Washer", 'Dish']

	const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;

		if (value === 'add_new') {
			setIsAddingNew(true);
		} else {
			// setCustomerInfo(prev => ({
			// 	...prev,
			// 	adSource: value
			// }));
		}
	};

	const handleNewAdSourceChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewAdSource(e.target.value);
	};

	const handleAddNewAdSource = () => {
		if (newAdSource.trim()) {
			// Add to custom sources list
			setCustomAdSources(prev => [...prev, newAdSource]);

			// Set as current selection
			// setCustomerInfo(prev => ({
			// 	...prev,
			// 	adSource: newAdSource
			// }));

			// Reset form
			setNewAdSource('');
			setIsAddingNew(false);
		}
	};

	const handleCancelAddNew = () => {
		setNewAdSource('');
		setIsAddingNew(false);
		// setCustomerInfo(prev => ({
		// 	...prev,
		// 	adSource: ''
		// }));
	};

	return (
		<div className={styles.formGroup}>
			<label htmlFor="adSource" className={styles.label}>Job details</label>
			<div className={styles.selectWrapper}>
				<select
					id="adSource"
					name="adSource"
					value={jobInfo.jobDetails.typeEquipment}
					onChange={handleSelectChange}
					className={styles.select}
				>
					<option value="">Select Ad Equipment</option>
					<option value="add_new">+ Add New Equipment</option>
					{options.map((o, index) => (
						<option key={index} value={o}>
							{o}
						</option>
					))}
					{/* Display custom ad sources */}
					{customAdSources.map((source, index) => (
						<option key={index} value={source}>
							{source}
						</option>
					))}


				</select>
			</div>

			{isAddingNew && (
				<div className={styles.addNewContainer}>
					<input
						type="text"
						value={newAdSource}
						onChange={handleNewAdSourceChange}
						placeholder="Enter new ad source"
						className={styles.input}
					/>
					<div className={styles.buttonGroup}>
						<button
							type="button"
							className={styles.addButton}
							onClick={handleAddNewAdSource}
						>
							Add
						</button>
						<button
							type="button"
							className={styles.cancelButton}
							onClick={handleCancelAddNew}
						>
							Cancel
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default TypeEquipment;