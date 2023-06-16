import React from "react";

import styles from "./customInput.module.css";

export default class customInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { placeholder, wrapperStyle, labelStyle, inputType } = this.props;
		return inputType == "textarea" ? (
			<div className={styles.inputGroup}>
				<textarea
					style={{
						width: "100%",
						height: "150px",
						// borderRadius: 5,
						border: "none",
						outline: "none",
						padding: 10,
					}}
					{...this.props}
				/>
			</div>
		) : (
			<div className={`${styles.inputGroup} ${wrapperStyle}`}>
				<input
					className={`${styles.inputText}`}
					{...this.props}
					placeholder=" "
					id={"input-text-" + placeholder}
				/>
				<label for={"input-text-" + placeholder} className={labelStyle}>
					{placeholder}
				</label>
			</div>
		);
	}
}
