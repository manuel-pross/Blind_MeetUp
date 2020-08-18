import React from "react";

const backgroundStyle = {
  backgroundColor: "#50b375",
  color: "#fff",
  padding: "0.3rem",
  borderRadius: "5px",
};

const Spacer = () => {
  return (
    <div id="sg-spacer" className="sg__links col mb-700">
      <h2 className="mb-200">Spacer</h2>
      <h3>Grundlegender Aufbau der Spacerklassen und deren Verwendung </h3>
      <p>
        Für die Spacer werden selbst angelegte utility-classes genutzt, die direkt als Klassennamen in die entsprechende
        Tags eingefügt werden. Hierbei orientieren wir uns an die Bootstrap-Spacerklassen, mit eigenen Values. Dabei sollte stets auf den Clean-Code geachtet werden. Padding wird ausschließlich für das
        Innere eines Elemtes verwendet und Marign für das äußere. Es muss auf die Breakpoints geachtet werden und
        Gleichmäßgikeit der verwendeten Abstände.
      </p>
      <p>
        Die Klassen werden direkt in die Tags als Class geschrieben. Beispiel:
        <span style={backgroundStyle}>
          <span style={{ color: "#159" }}>class</span>=<span style={{ color: "#792c00" }}>"m-100"</span>
        </span>
      </p>
      <div>
        Der Aufbau ist wie folgt,
        <span style={backgroundStyle}>[Property][Postion]-[Breakpoint]-[Value]</span>
        <h4>Beispiel: </h4>
        <span style={backgroundStyle}>[Property]</span> = padding = p <br />
        <span style={backgroundStyle}>[Postion]</span> = links = l <br />
        <span style={backgroundStyle}>[Breakpoint]</span> = md <br />
        <span style={backgroundStyle}>[Value]</span> = 1rem = 100 <br /> ergibt: <br />
        <span style={backgroundStyle}>pl-md-100</span>=
        <span style={backgroundStyle}> padding-left: 1rem !Important</span>
        AB Breakpoint md. <br />
        Wenn kein breakpoint angegeben wird (z.B: <span style={backgroundStyle}>pl-100</span>) bezieht sich der Wert auf
        alle Bildschirmauflösungen.
      </div>
      <h3>Somit ergibt sich:</h3>
      <div>
        Alle Klassen sind <span style={{ color: "#159" }}> !Important </span> <br /> <br />
        <span style={backgroundStyle}>
          [Property] <br />
        </span>
        m = margin <br />
        p = padding <br /> <br />
        <span style={backgroundStyle}>
          [Position] <br />
        </span>
        y = Vertikal (oben untern, z.B py) <br />
        x = Horizontal (rechts links, z.B mx) <br />
        l,r,t,b = left, right, top, buttom <br /> <br />
        <span style={backgroundStyle}>
          [Breakpoint] <br />
        </span>
        xs, sm, md, lg, xl: Spacer wirkt AB diesem breakpoint <br /> <br />
        <span style={backgroundStyle}>
          [Value] <br />
        </span>
        Nur ganze rem Zahlen. Zahlenwert (100,200 ...) = (Zahlenwert/100)rem (100 = 1rem,...) <br />
        <h3>Beispiele:</h3>
        <span style={backgroundStyle}>m-100 = padding: 1rem !Important</span> <br />
        <span style={backgroundStyle}>py-200 = padding: 2rem 0;</span> <br />
        <span style={backgroundStyle}>ml-1000 = margin-left: 10rem;</span> <br />
        <span style={backgroundStyle}>mx-sm-500 = margin:0 5rem; (AB Breakpoint sm)</span> <br />
        <span style={backgroundStyle}>p-xl-900 = padding: 9rem; (AB breakpoint xl)</span> <br />
        <span style={backgroundStyle}>mr-lg-200 = margin-right: 2rem; (AB breakpoint lg)</span> <br />
      </div>
    </div>
  );
};

export default Spacer;
