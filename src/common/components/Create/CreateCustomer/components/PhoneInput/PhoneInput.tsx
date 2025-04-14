import  { useState} from "react";
import {IMaskInput} from "react-imask";

type Props = {
	onchange: (phoneNumber: string) => void
}
export const PhoneInput=({onchange}:Props)=> {
	const [phoneNumber, setPhoneNumber] = useState('');
	const [isValid, setIsValid] = useState(true);
console.log(phoneNumber)
	const handleBlur = () => {
		if(phoneNumber.length !==10){
			setIsValid(false);
		}

	};

const handleAccept=(value: string)=>{
	setIsValid(true);
	setPhoneNumber(value.replace(/\D/g, ''))
	onchange(value.replace(/\D/g, ''))
}

	return (
		<>
			<label htmlFor="phoneInput">Phone:</label>
			<br/>
			<IMaskInput
				id="phoneInput"
				required={true}
				label={"Phone number"}
				mask="(000) 000-0000"
				value={phoneNumber}
				onAccept={handleAccept}
				placeholder="(xxx) xxx-xxxx"
				onBlur={handleBlur}
			/>
			{!isValid && <p style={{ color: 'red' }}>Invalid phone number</p>}
		</>

	);
}

