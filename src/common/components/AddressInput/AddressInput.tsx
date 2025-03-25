

	import {ChangeEvent, useState} from "react";

export const  AddressInput=()=>{
		const [houseStreet, setHouseStreet] = useState('');
		const [suitApt, setSuitApt] = useState('');
		const [city, setCity] = useState('');
		const [state, setState] = useState('');
		const [zip, setZip] = useState('');

		const handleHouseStreetChange = (e:ChangeEvent<HTMLInputElement>) => {
			setHouseStreet(e.target.value);
		};

		const handleSuitAptChange = (e:ChangeEvent<HTMLInputElement>) => {
			setSuitApt(e.target.value);
		};

		const handleCityChange = (e:ChangeEvent<HTMLInputElement>) => {
			setCity(e.target.value);
		};

		const handleStateChange = (e:ChangeEvent<HTMLInputElement>) => {
			setState(e.target.value);
		};

		const handleZipChange = (e:ChangeEvent<HTMLInputElement>) => {
			setZip(e.target.value);
		};

		return (
			<div>
				<div>
					<label htmlFor="houseStreet">House/Street:</label>
					<input
						type="text"
						id="houseStreet"
						value={houseStreet}
						onChange={handleHouseStreetChange}
					/>
				</div>

				<div>
					<label htmlFor="suitApt">Suit/Apt:</label>
					<input
						type="text"
						id="suitApt"
						value={suitApt}
						onChange={handleSuitAptChange}
					/>
				</div>

				<div>
					<label htmlFor="city">City:</label>
					<input
						type="text"
						id="city"
						value={city}
						onChange={handleCityChange}
					/>
				</div>


					<div>
						<label>State:</label>

							<label>
								<input
									style={{width: 50}}
									type="radio"
									value="WA"
									checked={state === 'WA'}
									onChange={handleStateChange}
								/>
								WA,
							</label>
							<label>
								<input
									style={{width: 50}}
									type="radio"
									value="OR"
									checked={state === 'OR'}
									onChange={handleStateChange}
								/>
								OR
							</label>

					</div>


				<div>
					<label htmlFor="zip">Zip:</label>
					<input
						type="text"
						id="zip"
						value={zip}
						onChange={handleZipChange}
					/>
				</div>
			</div>
		);
}

