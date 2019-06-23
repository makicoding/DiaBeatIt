import React from "react";
import "../components/Buttons/buttons.css";
import "../components/Text/text.css";
import "../components/InputAndSelectField/inputAndSelectField.css";
import "../components/PageWrapper/pageWrapper.css";
import "../components/MainContentContainer/mainContentContainer.css";
import BackgroundImage from "../components/BackgroundImage";
import SplashBanner from "../components/SplashBanner";

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class Splash extends React.Component {
  
    render() {
        return(
        <div>

            {/* ---------------------------------------- */}
            {/* MAIN CONTENT OF PAGE */}

            <BackgroundImage />

            <SplashBanner />

            <div class="splashButtonsContainer">
                <a href="MainMenu"><button class="button2">Sign up</button></a>
                <a href="MainMenu"><button class="button2">Login</button></a>
            </div>
            
            

        </div>
        )
    }
}

export default Splash;