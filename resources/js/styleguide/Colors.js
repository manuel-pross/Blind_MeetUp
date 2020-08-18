import React, { useEffect } from "react";
import "./Styleguide";

// Components
import OneColor from "./OneColor/OneColor";

const Colors = () => {
	useEffect(() => {
		document.querySelectorAll(".sg_copy_color").forEach((el) => {
			el.addEventListener("click", () => {
				el.classList.add("is-clicked-color");
				setTimeout(() => {
					el.classList.remove("is-clicked-color");
				}, 200);
			});
		});

		document.querySelectorAll(".sg_copy_hex").forEach((el) => {
			el.addEventListener("click", () => {
				el.parentElement.classList.add("is-clicked-color");
				setTimeout(() => {
					el.parentElement.classList.remove("is-clicked-color");
				}, 200);
			});
		});

		document.querySelectorAll(".sg_copy_ut").forEach((el) => {
			el.addEventListener("click", () => {
				el.classList.add("is-clicked-ut");
				setTimeout(() => {
					el.classList.remove("is-clicked-ut");
				}, 200);
			});
		});
	}, []);
	return (
		<div id="sg-colors" className="sg__colors mb-700">
			<h3>Farben</h3>
			<span>
				Die Farben für die Markenkommunikation und deren
				Anwendungsgebiete ist nachfolgend definiert
			</span>

			{/* <!-- Primäre Farben --> */}

			<h4 className="mt-5 mb-400">Primäre Farben</h4>
			<div className="row">
				<OneColor
					classBackgroundColor={"bg-main1"}
					hexCode={["#000000", "c-white"]}
					nameOfTheClass={"$c1-main"}
				/>
				<OneColor
					classBackgroundColor={"bg-main2"}
					hexCode={["#ffffff", "c-black"]}
					nameOfTheClass={"$c2-main"}
				/>
				<OneColor
					classBackgroundColor={"bg-main3"}
					hexCode={["#03b670", "c-white"]}
					nameOfTheClass={"$c3-main"}
				/>
			</div>

			{/* <!-- Sekundäre Farben --> */}

			<h4 className="mt-5 mb-400">Sekundäre Farben</h4>
			<div className="row">
				<OneColor
					classBackgroundColor={"bg-second1"}
					hexCode={["#50b375", "c-white"]}
					nameOfTheClass={"$c1-second"}
				/>
				<OneColor
					classBackgroundColor={"bg-second2"}
					hexCode={["#2e6c48", "c-white"]}
					nameOfTheClass={"$c2-second"}
					borderColor={"darkgrey"}
				/>
				<OneColor
					classBackgroundColor={"bg-second3"}
					hexCode={["#ee220c", "c-white"]}
					nameOfTheClass={"$c3-second"}
				/>
			</div>

			{/* <!-- System Farben --> */}

			<h4 className="mt-5 mb-400">System Farben</h4>
			<div className="row">
				<OneColor
					classBackgroundColor={"bg-success"}
					hexCode={["#5cb85c", "c-black"]}
					nameOfTheClass={"$c-success"}
				/>
				<OneColor
					classBackgroundColor={"bg-warn"}
					hexCode={["#f0ad4e", "c-black"]}
					nameOfTheClass={"$c-warn"}
				/>
				<OneColor
					classBackgroundColor={"bg-error"}
					hexCode={["#d9534f", "c-white"]}
					nameOfTheClass={"$c-error"}
				/>
			</div>

			{/* <!-- Standard Farben --> */}

			<h4 className="mt-5 mb-400">Standard Farben</h4>
			<div className="row">
				<OneColor
					classBackgroundColor={"bg-white"}
					hexCode={["#fefefe", "c-black"]}
					nameOfTheClass={"$c-white"}
				/>
				<OneColor
					classBackgroundColor={"bg-grey"}
					hexCode={["#999999", "c-white"]}
					nameOfTheClass={"$c-grey"}
				/>
				<OneColor
					classBackgroundColor={"bg-black"}
					hexCode={["#010101", "c-white"]}
					nameOfTheClass={"$c-black"}
				/>
			</div>

			<ul>
				<li>
					<h4 className="mb-100 mt-500">
						c1-main: Standard-Farbe für das Logo sowie für
						Überschriften (H1-H3) oder wichtige Texte.
					</h4>
				</li>
				<li>
					<h4 className="mb-100">
						c2-main: Ausschließlich für Hintergründe, das Logo
						und Texte auf Bildern geeignet.
					</h4>
				</li>
				<li>
					<h4 className="mb-100">
						c3-main: Für Standard-Texte, aber auch
						Unter-Überschriften zu verwenden.
					</h4>
				</li>
				<li>
					<h4 className="mb-100">
						c1-second: Farbelement für Schaltflächen und
						Call-To-Action-Elemente
					</h4>
				</li>
				<li>
					<h4 className="mb-100">
						c2-second: Farbelement für Schaltflächen und
						Call-To-Action-Elemente
					</h4>
				</li>
				<li>
					<h4 className="mb-300">
						c3-second: Für Fehler-Meldungen oder auch
						Validierungsfehler zu verwenden
					</h4>
				</li>
			</ul>
		</div>
	);
};
export default Colors;
