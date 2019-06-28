import React from 'react';
import '../components/Resources/Resources.css';
import Resource from '../components/Resources/Resources'
import  'bootstrap/dist/css/bootstrap.min.css'
import HamburgerMenu from "../components/HamburgerMenu";
import Br from "../components/CustomLineBreak";
import Br2 from "../components/CustomLineBreak2";
import "../components/Buttons/buttons.css";
import "../components/Text/text.css";
import HelloUserAndSignOut from "../components/HelloUserAndSignOut";
import "../components/PageWrapper/pageWrapper.css";
import "../components/MainContentContainer/mainContentContainer.css";
import "../components/InputAndSelectField/inputAndSelectField.css";

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

function Resources() {
  return (
    <div>

      {/* ---------------------------------------- */}
      {/* MAIN CONTENT OF PAGE */}

      {/* Page Wrapper */}
      <div className="pageWrapper">

          {/* Hello user first name text and sign out anchor */}
          <HelloUserAndSignOut />

          {/* Page header */}
          <div className="pageHeader">Resources</div>
      
          {/* Main content container */}
          <div className="mainContentContainer">
          
            <div className="App">    
              <Resource/>

              {/* /* Triple line break not necessary here, there is enough room underneath for this page */}
              {/* <Br />
              <Br />
              <Br /> */}

            </div>

          </div>

      </div>


      {/* ---------------------------------------- */}
      {/* HAMBURGER MENU */}

      <HamburgerMenu />

    </div>
  );
}

export default Resources;
