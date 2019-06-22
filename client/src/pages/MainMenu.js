import React, { Component } from "react";
import "../components/MainMenu/mainMenu.css";

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class MainMenu extends React.Component {

  render() {
    return(
      <div>

        {/* MAIN MENU */}
        <div className="backgroundColor">
          <a className="mainMenuAnchor" href="CalorieEntry">Calorie Entry</a>
          <a className="mainMenuAnchor" href="CalorieData">Calorie Data</a>
          <a className="mainMenuAnchor" href="StoreFinder">Store Finder</a>
          <a className="mainMenuAnchor" href="RecipeFinder">Recipe Finder</a>
          <a className="mainMenuAnchor" href="HealthTimeline">Health Timeline</a>
          <a className="mainMenuAnchor" href="HealthCard">Digital Health Card</a>
          <a className="mainMenuAnchor" href="Resources">Resources</a>
          <a className="mainMenuAnchor" href="Contact">Contact</a>
          <a className="mainMenuAnchor" href="index.html">Sign Out</a>
        </div>

      </div>
    );
  }
}

export default MainMenu;