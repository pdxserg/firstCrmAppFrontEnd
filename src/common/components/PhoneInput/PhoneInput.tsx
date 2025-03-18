import  { useState} from "react";
import {IMaskInput} from "react-imask";

type Props = {
	onchange: (phoneNumber: string) => void
}
export const PhoneInput=({onchange}:Props)=> {
	const [phoneNumber, setPhoneNumber] = useState('');
	const [isValid, setIsValid] = useState(true);

	const handleBlur = () => {
		if(phoneNumber.length !==14){
			setIsValid(false);
		}

	};

const handleAccept=(value: string)=>{
	setIsValid(true);
	setPhoneNumber(value)
	onchange(value)
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

