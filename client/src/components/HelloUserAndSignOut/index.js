import React from "react";
import "./helloUserAndSignOut.css";

class HelloUserAndSignOut extends React.Component {

  signOut = () => {
    window.open("https://www.google.com");
  }

  render() {
    return(
      <div>             
        <div className="helloUserTxt">Hello <span className="userFirstName">Jane</span>!</div>
        {/* <p className="signOutAnchor" href="https://www.nutritionix.com/uk/database/common-foods" target="_blank">Click here to look up calories</p> */}
        <div className="signOutContainer"><span className="signOutAnchor" onClick={this.signOut}>Sign Out</span></div>
      </div>   
    )
  }
}

export default HelloUserAndSignOut;