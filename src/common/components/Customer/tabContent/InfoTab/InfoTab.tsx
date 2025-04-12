// @flow

import styles from "./InfoTab.module.css";
import {CustomerType} from "../../Customer.tsx";

type Props = {
	customerInfo:CustomerType
	handleInputChange:(e:any)=>void
};
export const InfoTab = ({customerInfo, handleInputChange}: Props) => {
	return (
		<div className={styles.tabContent}>
			<div className={styles.twoColumn}>
				<div className={styles.column}>
					<h2 className={styles.sectionTitle}>Client Details</h2>
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

					<div className={styles.formGroup}>
						<label htmlFor="description" className={styles.label}>Description</label>
						<textarea
							id="description"
							name="description"
							value={customerInfo.customerName}
							onChange={handleInputChange}
							className={styles.textarea}
							placeholder="Add the most important information about your client that will be displayed on the page"
						></textarea>
						<div className={styles.charCount}>0 / 160</div>
					</div>

					<div className={styles.formGroup}>
						<label htmlFor="adSource" className={styles.label}>Ad Source</label>
						<div className={styles.selectWrapper}>
							<select
								id="adSource"
								name="adSource"
								value={customerInfo.customerPhone}
								onChange={handleInputChange}
								className={styles.select}
							>
								<option value="">Select Ad Source</option>
								<option value="referral">Referral</option>
								<option value="online">Google</option>
								<option value="other">Thumbtack</option>
							</select>
						</div>
					</div>
				</div>

				<div className={styles.column}>
					<h2 className={styles.sectionTitle}>Client Address</h2>
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