// Customer.tsx
import { useState } from 'react';
import styles from './Customer.module.css';

type Tab = 'info' | 'jobs' | 'estimates' | 'invoices' | 'payments' | 'addresses';

interface CustomerProps {
	// You can add props as needed
}

const Customer: React.FC<CustomerProps> = () => {
	const [activeTab, setActiveTab] = useState<Tab>('info');
	const [customerInfo, setCustomerInfo] = useState({
		firstName: 'WWWW',
		lastName: '',
		companyName: '',
		phoneNumber: '4324523523',
		secondaryPhone: '',
		email: '',
		description: '',
		adSource: '',
		address: '234 SE 136th Ave, Vancouver, Washington 98684',
		billToAddress: '234 SE 136th Ave, Vancouver, Washington 98684',
		autoInvoicing: false,
		allowBilling: false,
		paymentTerms: 'Use default (use account value)',
		parentClient: ''
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setCustomerInfo({
			...customerInfo,
			[name]: value
		});
	};

	const handleSave = () => {
		alert('Customer information saved!');
		console.log(customerInfo);
	};

	const renderTabContent = () => {
		switch (activeTab) {
			case 'info':
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
												value={customerInfo.firstName}
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
												value={customerInfo.lastName}
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
										value={customerInfo.companyName}
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
											value={customerInfo.phoneNumber}
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
											value={customerInfo.secondaryPhone}
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
										value={customerInfo.email}
										onChange={handleInputChange}
										className={styles.input}
									/>
								</div>

								<div className={styles.formGroup}>
									<label htmlFor="description" className={styles.label}>Description</label>
									<textarea
										id="description"
										name="description"
										value={customerInfo.description}
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
											value={customerInfo.adSource}
											onChange={handleInputChange}
											className={styles.select}
										>
											<option value="">Select Ad Source</option>
											<option value="referral">Referral</option>
											<option value="online">Online</option>
											<option value="other">Other</option>
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
											value={customerInfo.address}
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
											value={customerInfo.billToAddress}
											onChange={handleInputChange}
											className={styles.input}
										/>
									</div>
								</div>

								<div className={styles.formGroup}>
									<div className={styles.linkText}>
										Turn On Auto Invoicing
									</div>
								</div>

								<div className={styles.formGroup}>
									<label className={styles.label}>Allow Billing</label>
									<div className={styles.toggle}>
										<div className={styles.toggleOption}>NO</div>
									</div>
									<div className={styles.helpText}>
										Allows you to close jobs with due balance
									</div>
								</div>

								<div className={styles.formGroup}>
									<label htmlFor="paymentTerms" className={styles.label}>Client Payment Terms</label>
									<div className={styles.selectWrapper}>
										<select
											id="paymentTerms"
											name="paymentTerms"
											value={customerInfo.paymentTerms}
											onChange={handleInputChange}
											className={styles.select}
										>
											<option value="Use default (use account value)">Use default (use account value)</option>
											<option value="net30">Net 30</option>
											<option value="net15">Net 15</option>
										</select>
									</div>
								</div>

								<div className={styles.formGroup}>
									<label htmlFor="parentClient" className={styles.label}>Set A Parent Client</label>
									<input
										type="text"
										id="parentClient"
										name="parentClient"
										value={customerInfo.parentClient}
										onChange={handleInputChange}
										className={styles.input}
									/>
								</div>

								<div className={styles.formGroup}>
									<div className={styles.linkText}>
										What are parent clients?
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			case 'jobs':
				return <div className={styles.tabContent}>Jobs content will be displayed here</div>;
			case 'estimates':
				return <div className={styles.tabContent}>Estimates content will be displayed here</div>;
			case 'invoices':
				return <div className={styles.tabContent}>Invoices content will be displayed here</div>;
			case 'payments':
				return <div className={styles.tabContent}>Payments content will be displayed here</div>;
			case 'addresses':
				return <div className={styles.tabContent}>Addresses content will be displayed here</div>;
			default:
				return <div className={styles.tabContent}>Select a tab to view content</div>;
		}
	};

	return (
		<div className={styles.customerContainer}>
			<div className={styles.header}>
				<nav className={styles.nav}>
					<ul className={styles.tabs}>
						<li
							className={`${styles.tab} ${activeTab === 'info' ? styles.active : ''}`}
							onClick={() => setActiveTab('info')}
						>
							Client Info
						</li>
						<li
							className={`${styles.tab} ${activeTab === 'jobs' ? styles.active : ''}`}
							onClick={() => setActiveTab('jobs')}
						>
							Jobs(0)
						</li>
						<li
							className={`${styles.tab} ${activeTab === 'estimates' ? styles.active : ''}`}
							onClick={() => setActiveTab('estimates')}
						>
							Estimates(0)
						</li>
						<li
							className={`${styles.tab} ${activeTab === 'invoices' ? styles.active : ''}`}
							onClick={() => setActiveTab('invoices')}
						>
							Invoices(0)
						</li>
						<li
							className={`${styles.tab} ${activeTab === 'payments' ? styles.active : ''}`}
							onClick={() => setActiveTab('payments')}
						>
							Payments(0)
						</li>
						<li
							className={`${styles.tab} ${activeTab === 'addresses' ? styles.active : ''}`}
							onClick={() => setActiveTab('addresses')}
						>
							Addresses(1)
						</li>
						<li className={styles.tab}>
							More <span className={styles.dropdownIcon}>▼</span>
						</li>
					</ul>
				</nav>
			</div>

			<div className={styles.content}>
				{renderTabContent()}
			</div>

			<div className={styles.footer}>
				<button className={styles.saveButton} onClick={handleSave}>
					Save
				</button>
			</div>
		</div>
	);
};

export default Customer;