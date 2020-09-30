import React from "react";
import Navigation from "./Navigation";
import Colors from "./Colors";
import Fonts from "./Fonts";
import Helper from "./Helper";
import Grid from "./Grid";
import Spacer from "./Spacer";
import Button from "./Buttons";
import Logos from "./Logos";
import Links from "./Links";


const Styleguide = () => {

  return (
    <div className="bg-second2 sg">
      <Navigation />
      <div className="container">
        <div className="row bg-white">
          <div className="sg my-5 p-700">
            <div className="header mb-4">
              <h1>Offizielles Styleguide</h1>
              <h2>für das Banding des Projekts "Blind MeetUp"</h2>
            </div>
            <Logos />
            <Colors />
            <Helper />
            <Grid />
            <Spacer />
            <Fonts />
            <Button />
            <Links />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Styleguide;
