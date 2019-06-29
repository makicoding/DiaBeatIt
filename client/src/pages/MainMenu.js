import React, { Component } from "react";
import "../components/MainMenu/mainMenu.css";
import { Link, withRouter } from "react-router-dom";

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class MainMenu extends React.Component {

  signOut = () => {
    window.localStorage.clear();
    window.location.replace("/");  
  }

  render() {
    return(
      <div>

        {/* MAIN MENU */}
        <div className="backgroundColor">
          {/* Link is prebuilt into react-router-dom and is the same as an anchor a tag */}
          <Link to="CalorieEntry" className="mainMenuAnchor">Calorie Entry</Link>
          <Link to="CalorieData" className="mainMenuAnchor">Calorie Data</Link>
          <Link to="StoreFinder" className="mainMenuAnchor">Store Finder</Link>
          <Link to="RecipeFinder" className="mainMenuAnchor">Recipe Finder</Link>
          <Link to="HealthTimeline" className="mainMenuAnchor">Health Timeline</Link>
          <Link to="HealthCard" className="mainMenuAnchor">Digital Health Card</Link>
          <Link to="Resources" className="mainMenuAnchor">Resources</Link>
          <Link to="Contact" className="mainMenuAnchor">Contact</Link>
          {/* <span className="mainMenuAnchor" onClick={this.signOut}>Sign Out</span> */}
          <Link to="/" className="mainMenuAnchor">Back To Home</Link>
        </div>

      </div>
    );
  }
}

export default MainMenu;