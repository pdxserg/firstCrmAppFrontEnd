import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import styles from "./FloatingInput.module.css";

type Props = {
	label: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	error?: string;
	type?: InputHTMLAttributes<HTMLInputElement>["type"];
	placeholder?: string;
	name?: string;
	required?: boolean;
};

export const FloatingInput = ({
	                              label,
	                              value,
	                              onChange,
	                              error,
	                              type = "text",
	                              placeholder,
	                              name,
	                              required
                              }: Props) => {
	const [isFocused, setIsFocused] = useState(false);
	const hasValue = !!value;

	return (
		<div className={styles.wrapper}>
			<input
				type={type}
				name={name}
				required={required}
				value={value}
				className={`${styles.input} ${error ? styles.invalid : ""}`}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				onChange={onChange}
				placeholder={placeholder}
			/>
			<label
				className={`${styles.label} ${isFocused || hasValue ? styles.floating : ""}`}
			>
				{label}
			</label>

			<div className={styles.validation}>
				{error && <p className={styles.error}>{error}</p>}
			</div>
		</div>
	);
};
