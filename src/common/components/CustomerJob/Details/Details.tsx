// @flow


import styles from "./Details.module.css"
import {CustomerType} from "../../Create/CreateCustomer/CreateCustomer.tsx";
import {ChangeEvent, useState} from "react";
import TypeEquipment from "./components/TypeApplience/TypeEquipment.tsx";

type Props = {
	customerInfo: CustomerType
	handleInputChange: (e: any) => void
	maxLength?:number
};
export const Details = ({customerInfo, handleInputChange, maxLength=160}: Props) => {

	const [inputValue, setInputValue] = useState<string>('');

	const handleInputChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
		let value = e.target.value;
		if (value.length > maxLength) {
			value = value.substring(0, maxLength);
		}
		setInputValue(value);
	}

	return (
		<div className={styles.tabContent}>
			<div className={styles.twoColumn}>

				<div className={styles.column}>
					<h2 className={styles.sectionTitle}>Client Details</h2>

					{/*//name*/}
					<div className={styles.formGroup}>
						<div className={styles.nameFields}>
							<div className={styles.inputGroup}>
								<label htmlFor="firstName" className={styles.label}>First Name</label>
								<input
									type="text"
									id="firstName"
									name="firstName"
									value={customerInfo.customerName}
									onChange={handleInputChange}
									className={styles.input}
								/>
							</div>
							<div className={styles.inputGroup}>
								<label htmlFor="lastName" className={styles.label}>Last Name</label>
								<input
									type="text"
									id="lastName"
									name="lastName"
									value={customerInfo.customerName}
									onChange={handleInputChange}
									className={styles.input}
								/>
							</div>
						</div>
					</div>

					{/*//company name*/}
					<div className={styles.formGroup}>
						<label htmlFor="companyName" className={styles.label}>Company Name</label>
						<input
							type="text"
							id="companyName"
							name="companyName"
							value={customerInfo.customerName}
							onChange={handleInputChange}
							className={styles.input}
						/>
					</div>

					<h2 className={styles.sectionTitle}>Contact Information</h2>

					{/*//phone*/}
					<div className={styles.formGroup}>
						<label htmlFor="phoneNumber" className={styles.label}>Phone Number</label>
						<div className={styles.phoneField}>
							<input
								type="tel"
								id="phoneNumber"
								name="phoneNumber"
								value={customerInfo.customerPhone}
								onChange={handleInputChange}
								className={styles.input}
							/>
							<div className={styles.phoneIcons}>
								<span className={styles.icon}>📞</span>
								<span className={styles.icon}>✉️</span>
							</div>
							<div className={styles.extField}>
								<span>EXT</span>
							</div>
						</div>
					</div>

					{/*//phone*/}
					<div className={styles.formGroup}>
						<label htmlFor="secondaryPhone" className={styles.label}>Secondary Phone</label>
						<div className={styles.phoneField}>
							<input
								type="tel"
								id="secondaryPhone"
								name="secondaryPhone"
								value={customerInfo.customerPhone}
								onChange={handleInputChange}
								className={styles.input}
							/>
							<div className={styles.extField}>
								<span>EXT</span>
							</div>
						</div>
					</div>

					{/*// email*/}
					<div className={styles.formGroup}>
						<label htmlFor="email" className={styles.label}>Email</label>
						<input
							type="email"
							id="email"
							name="email"
							value={customerInfo.customerEmail}
							onChange={handleInputChange}
							className={styles.input}
						/>
					</div>

					{/*//ad source*/}
					<TypeEquipment  />

					{/*//description*/}
					<div className={styles.textAreaContainer}>
						<textarea
							className={styles.textArea}
							value={inputValue}
							onChange={handleInputChangeTextarea}
						/>
						<p className={styles.characterCount}>{inputValue.length}/{maxLength}</p>
					</div>

					{/*<div className={styles.formGroup}>*/}
					{/*	<label htmlFor="adSource" className={styles.label}>Ad Source</label>*/}
					{/*	<div className={styles.selectWrapper}>*/}
					{/*		<select*/}
					{/*			id="adSource"*/}
					{/*			name="adSource"*/}
					{/*			value={customerInfo.customerPhone}*/}
					{/*			onChange={handleInputChange}*/}
					{/*			className={styles.select}*/}
					{/*		>*/}
					{/*			<option value="">Select Ad Source</option>*/}
					{/*			<option value="referral">Referral</option>*/}
					{/*			<option value="online">Google</option>*/}
					{/*			<option value="other">Thumbtack</option>*/}
					{/*			<option value="custom">Other (Custom)</option>*/}
					{/*		</select>*/}
					{/*	</div>*/}

					{/*</div>*/}
				</div>

				{/*//right side*/}
				<div className={styles.column}>
					<h2 className={styles.sectionTitle}>Client Address</h2>

					//main service address
					<div className={styles.formGroup}>
						<label htmlFor="address" className={styles.label}>Main Service Address</label>
						<div className={styles.addressField}>
							<span className={styles.locationIcon}>📍</span>
							<input
								type="text"
								id="address"
								name="address"
								value={customerInfo.address.zip}
								onChange={handleInputChange}
								className={styles.input}
							/>
						</div>
					</div>

					//billing service address
					<div className={styles.formGroup}>
						<label htmlFor="billToAddress" className={styles.label}>Bill To</label>
						<div className={styles.addressField}>
							<span className={styles.locationIcon}>📍</span>
							<input
								type="text"
								id="billToAddress"
								name="billToAddress"
								value={customerInfo.address.zip}
								onChange={handleInputChange}
								className={styles.input}
							/>
						</div>
					</div>

					{/*<div className={styles.formGroup}>*/}
					{/*	<div className={styles.linkText}>*/}
					{/*		Turn On Auto Invoicing*/}
					{/*	</div>*/}
					{/*</div>*/}

					{/*<div className={styles.formGroup}>*/}
					{/*	<label className={styles.label}>Allow Billing</label>*/}
					{/*	<div className={styles.toggle}>*/}
					{/*		<div className={styles.toggleOption}>NO</div>*/}
					{/*	</div>*/}
					{/*	<div className={styles.helpText}>*/}
					{/*		Allows you to close jobs with due balance*/}
					{/*	</div>*/}
					{/*</div>*/}

					{/*<div className={styles.formGroup}>*/}
					{/*	<label htmlFor="paymentTerms" className={styles.label}>Client Payment Terms</label>*/}
					{/*	<div className={styles.selectWrapper}>*/}
					{/*		<select*/}
					{/*			id="paymentTerms"*/}
					{/*			name="paymentTerms"*/}
					{/*			value={customerInfo.paymentTerms}*/}
					{/*			onChange={handleInputChange}*/}
					{/*			className={styles.select}*/}
					{/*		>*/}
					{/*			<option value="Use default (use account value)">Use default (use account value)</option>*/}
					{/*			<option value="net30">Net 30</option>*/}
					{/*			<option value="net15">Net 15</option>*/}
					{/*		</select>*/}
					{/*	</div>*/}
					{/*</div>*/}

					{/*<div className={styles.formGroup}>*/}
					{/*	<label htmlFor="parentClient" className={styles.label}>Set A Parent Client</label>*/}
					{/*	<input*/}
					{/*		type="text"*/}
					{/*		id="parentClient"*/}
					{/*		name="parentClient"*/}
					{/*		value={customerInfo.parentClient}*/}
					{/*		onChange={handleInputChange}*/}
					{/*		className={styles.input}*/}
					{/*	/>*/}
					{/*</div>*/}

					{/*<div className={styles.formGroup}>*/}
					{/*	<div className={styles.linkText}>*/}
					{/*		What are parent clients?*/}
					{/*	</div>*/}
					{/*</div>*/}
				</div>
			</div>
		</div>
	);
};