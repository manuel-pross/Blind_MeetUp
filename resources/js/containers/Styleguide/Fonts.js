import React from "react";

const Fonts = () => {
  return (
    <div id="sg-font" className="sg__font col mb-700">
      <h3 className="mb-200">Schrift</h3>
      <ul>
        <li>
          <h5 className="mb-100">
            In der Kommunikation wird ausschließlich die Schriftart „Maven Pro“
            zu <a href="ogy.de/maven-pro">ogy.de/maven-pro</a> verwendet.
          </h5>
        </li>
        <li>
          <h5 className="mb-100">
            Für die Überschriften (H1/H2) wird die Schriftdicke 700 in schwarz
            und ein Zeilenabstand von 110% (1,1) verwendet.
          </h5>
        </li>
        <li>
          <h5 className="mb-100">
            Für längere Subline-Überschriften (H3/H4) wird die Schriftdicke 400
            in schwarz und ein Zeilenabstand von 110% verwendet.
          </h5>
        </li>
        <li>
          <h5 className="mb-100">
            Für normale (Mengen-)Texte wird ebenfalls die Schriftdicke 400
            verwendet, allerdings mit der Farbe „Dark Grey“ und ein
            Zeilenabstand von 150% (1,5).
          </h5>
        </li>
        <li>
          <h5 className="mb-300">
            Für Hervorhebungen innerhalb des Texts wird die Schriftdicke 500
            verwendet.
          </h5>
        </li>
      </ul>

      <h1 className="my-100">h1: Lorem ipsum dolor sit amet</h1>
      <h3 className="mb-100">h3: Lorem ipsum dolor sit amet</h3>
      <h5 className="mb-100">h5: Lorem ipsum dolor sit amet</h5>
      <span className="mb-100">
        span: Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
        nostrum. At deleniti, autem repudiandae impedit maiores voluptatum,
        temporibus reiciendis est distinctio excepturi, enim sapiente cum quis
        atque labore sequi. Molestiae!
      </span>
    </div>
  );
};

export default Fonts;
