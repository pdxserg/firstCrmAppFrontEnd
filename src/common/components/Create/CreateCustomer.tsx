import {ChangeEvent, useState} from "react";
import {EmailInput} from "../EmailInput/EmailInput.tsx";
import styles from "./CreateCustomer.module.css"
import {toast} from "react-toastify";
import {AddressInput, AddressType} from "../AddressInput/AddressInput.tsx";
import {useCreateCustomerMutation} from "../../../features/customers/api/customersApi.ts";
import {FloatingInput} from "../FloatingInput/FloatingInput.tsx";

export type CustomerType = {
	id: string,
	customerName: string
	customerEmail: string
	customerPhone: string
	address: AddressType

};
type Props = {
	onSuccess: () => void
	onCancel: () => void
}

export const CreateCustomer = ({onCancel, onSuccess}: Props) => {

	const [customerName, setCustomerName] = useState<string>("")
	const [customerEmail, setCustomerEmail] = useState<string>("email@gmail.com")
	const [customerPhone, setCustomerPhone] = useState<string>("3334445566")
	const [address, setAddress] = useState<AddressType | undefined>()

	const [createCustomer] = useCreateCustomerMutation()

	const createCustomerHandler = () => {
		onSuccess()
		createCustomer({customerName, customerEmail, customerPhone, address})
			.unwrap()
			.then(() => {
				// handleSelect(res.customerName,res.id)
				toast.success("Success!")
			})
			.catch((error) => {
				if (error && error.data && error.data.error) {
					toast.error(error.data.error);
				} else {
					toast.error("An unexpected error occurred Component CreateCastomer.");
				}
			});
	}

	const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value
		setCustomerName(
			value
				.split(' ')
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(' ')
		);

	}

	const onchangeEmailHandler = (email: string) => {
		setCustomerEmail(email)
	}
	const onchangePhoneHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setCustomerPhone(e.currentTarget.value)
	}
	const isValidPhone = (customerPhone: string) => {
		return /^\d{10}$/.test(customerPhone);
	}
	const onchangeAddress = (newAddress: AddressType | undefined) => {
		setAddress(newAddress)
	}

	return (
		<div className={styles.container}>

			<div className={styles.centerTopElement}>
				<h2>Create new customer</h2>
				<FloatingInput label="Client name" value={customerName ?? ""} onChange={onchangeHandler}/>
				<FloatingInput type="tel" label="Phone" value={customerPhone ?? ""} onChange={onchangePhoneHandler}
				               error={isValidPhone(customerPhone) ? "" : "Invalid phone number"}/>

				<EmailInput onchange={onchangeEmailHandler}/>

				{/*<PhoneInput onchange={onchangePhoneHandler}/>*/}
				<AddressInput onchangeAddress={onchangeAddress}/>
				<button disabled={!address} onClick={createCustomerHandler}>Add</button>
				<button   onClick={onCancel}>Cancel</button>
				{!address && <p>you need save address</p>}
			</div>
		</div>
	)
}