import React from "react";
import logoFullBlack from "./../../assets/img/Bildmarke.png";
import logoFullWhite from "./../../assets/img/Bildmarke_invertiert.png";
import oneLineBlack from "./../../assets/img/Wortmarke_OneLine.png";
import oneLineWhite from "./../../assets/img/Wortmarke_OneLine_invertiert.png";
import twoLineBlack from "./../../assets/img/Wortmarke_TwoLine.png";
import twoLineWhite from "./../../assets/img/Wortmarke_TwoLine_invertiert.png";

const Logos = () => {
  return (
    <div>
      <h2>Bild- und Wortmarken</h2>
      <div id="sg-logo" className="sg__logo row mb-700">
        <div className="col-6 d-flex flex-column">
          <img src={logoFullBlack} alt="full-logo-vector" />
          <span>Bild-/Wortmarke Schwarz</span>
        </div>
        <div className="col-6 d-flex flex-column">
          <img src={logoFullWhite} className="bg-black" alt="full-logo-vector" />
          <span>Bild-/Wortmarke Weiß</span>
        </div>
      </div>
      <h2>One Line</h2>
      <div id="sg-logo" className="sg__logo row mb-700">
        <div className="col-6 d-flex flex-column">
          <img src={oneLineBlack} alt="full-logo-vector" />
          <span>One-Line Schwarz</span>
        </div>
        <div className="col-6 d-flex flex-column">
          <img src={oneLineWhite} className="bg-black" alt="full-logo-vector" />
          <span>One-Line Weiß</span>
        </div>
      </div>
      <h2>Two Line</h2>
      <div id="sg-logo" className="sg__logo row mb-700">
        <div className="col-6 d-flex flex-column">
          <img src={twoLineBlack} alt="full-logo-vector" />
          <span>Two-Line Schwarz</span>
        </div>
        <div className="col-6 d-flex flex-column">
          <img src={twoLineWhite} className="bg-black" alt="full-logo-vector" />
          <span>Two-Line Weiß</span>
        </div>
      </div>
    </div>
  );
};

export default Logos;
