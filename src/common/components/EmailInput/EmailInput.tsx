import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';

type Props={
	onchange:(email:string)=>void
}

export const EmailInput=({onchange}:Props)=> {
	const [email, setEmail] = useState('');
	const [isValid, setIsValid] = useState(true);

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		setIsValid(e.target.validity.valid);
	};

	const handleAccept = (value: string) => {
		setIsValid(true)
		setEmail(value);
		onchange(value)
	};

	return (
		<div>
			<label htmlFor="emailInput">Email:</label>
			<br/>
			<IMaskInput
				id="emailInput" // Add an id
				// mask={/^.+@.+\..+$/}
				mask={/^[^@]*@?[^.]*\.?.*$/} // Modified regex mask
				value={email}
				onAccept={handleAccept}
				placeholder="example@email.com"
				unmask={true}
				onBlur={handleBlur}
				type="email" // Use type="email" for browser validation
			/>
			{!isValid && <p style={{ color: 'red' }}>Invalid email address</p>}
		</div>
	);
}

