
 import {ChangeEvent, useState} from "react";
import {PhoneInput} from "../PhoneInput/PhoneInput.tsx";
import {EmailInput} from "../EmailInput/EmailInput.tsx";
import styles from "./CreateCustomer.module.css"
import {toast} from "react-toastify";
import {AddressInput, AddressType} from "../AddressInput/AddressInput.tsx";
import {useCreateCustomerMutation} from "../../../features/customers/api/customersApi.ts";

export type CustomerType = {
	id: string,
	customerName: string
	customerEmail: string
	customerPhone: string
	address:AddressType

};


export const CreateCustomer = () => {

	const [customerName, setCustomerName] = useState<string>("John Cooper")
	const [customerEmail, setCustomerEmail] = useState<string>("email@gmail.com")
	const [customerPhone, setCustomerPhone] = useState<string>("3334445566")
	const [address, setAddress]=useState<AddressType|undefined|null>(null)

	 const [createCustomer] = useCreateCustomerMutation()

	const createCustomerHandler=()=>{
		createCustomer({customerName, customerEmail, customerPhone, address})
			.unwrap()
			.then(()=>toast.success("Success!"))
			.catch((error) => { // Type assertion
				if (error && error.data && error.data.error) {
					toast.error(error.data.error);
				} else {
					toast.error("An unexpected error occurred.");
				}
			});
	}

	const onchangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
		setCustomerName(e.currentTarget.value)
	}

	const onchangeEmailHandler=(email:string)=>{
		setCustomerEmail(email)
	}
	const onchangePhoneHandler=(phoneNumber:string)=>{
		setCustomerPhone(phoneNumber)
	}
	const onchangeAddress=(newAddress:AddressType|undefined|null)=>{
		setAddress(newAddress)
	}

	return (
		<div className={styles.container}>

			<div className={styles.centerTopElement}>
				<h2>Create new job</h2>

				<label htmlFor="name">Name:</label>
				<br/>
				<input type="text" id="name" name="name" placeholder="Enter your name"
				       value={customerName} onChange={onchangeHandler}
				/>
				<br/>
				<PhoneInput onchange={onchangePhoneHandler}/>
				<br/>
				<AddressInput onchangeAddress={onchangeAddress}/>
				<EmailInput onchange={onchangeEmailHandler}/>
				<br/>

				<button onClick={createCustomerHandler}>Add</button>
			</div>
		</div>
	)
}