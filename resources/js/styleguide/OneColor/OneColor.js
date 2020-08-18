import React from "react";

const OneColor = (props) => {

	const copyToClipBoard = (_value) => {
		const el = document.createElement("textarea");
		el.value = _value;
		document.body.appendChild(el);
		el.select();
		document.execCommand("copy");
		document.body.removeChild(el);
	};
	const showClickFeedback = () => {};

	const handelClick = (_value) => {
		copyToClipBoard(_value);
		showClickFeedback();
	};
	return (
		<div className="col-4 position-relative pb-200">
			<div style={{ borderColor: props.borderColor }} onClick={() => {handelClick(props.hexCode[0])}} className={"sg_copy_color sg_btn " + props.classBackgroundColor}>
				<span className={"sg_copy_hex " + props.hexCode[1]}>{props.hexCode[0]}</span>
			</div>
			<span className="sg__colors--desc sg_copy_ut" onClick={() => {handelClick(props.nameOfTheClass)}}>{props.nameOfTheClass}</span>
		</div>
	);
};
export default OneColor;
